import { Directive, ElementRef, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as d3 from "d3";
import { formatNumber } from '@angular/common';

@Directive({
  selector: "[appDestGraph]"
})
export class DestGraphDirective implements OnInit {
  stats: any = [];

  @Input() graphType: string;

  ngOnInit(): void {
    this.http.get(`http://localhost:8080/rides/stats/${this.graphType}`).subscribe(
      (stats: any) => {
        this.stats = stats;

      let max = -1;

      for (let i = 0; i < stats.length; i++){
        if ((stats[i].count || stats[i].value) > max) {
          max = (stats[i].count || stats[i].value);
        }
      }

       const margin = { top: 40, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      const x = d3.scaleBand().rangeRound([0, width]);

      const y = d3.scaleBand().rangeRound([height, 0]);

      const xAxis = d3.axisBottom(x);

      const yAxis = d3.axisLeft(y);

      const svg = d3
        .select(this.el.nativeElement)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // svg.call(tip);

      x.domain(
        this.stats.map(function(d) {
          return d._id;
        })
      );
      y.domain(
        this.stats.map(function(d) {
          return d.count || d.value;
        })
      );

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", max)
        // .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Count");

      svg
        .selectAll(".bar")
        .data(this.stats)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function(d) {
          return x(d._id);
        })
        .attr("width", 6)
        .attr("y", function(d) {
          return y(d.count ||  d.value);
        })
        .attr("height", function(d) {
          return height - y(d.count|| d.value);
        });      },
      err => {
        alert(err);
      }
    );  }

  constructor(private el: ElementRef, private http: HttpClient) {

  }
}
