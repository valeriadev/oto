import { Directive, ElementRef, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as d3 from "d3";

@Directive({
  selector: "[appDestGraph]"
})
export class DestGraphDirective implements OnInit {
  stats: any = [];
  ngOnInit(): void {

  }

  constructor(private el: ElementRef, private http: HttpClient) {
    this.http.get("http://localhost:8080/rides/stats/dest").subscribe(
      (stats: any) => {
        this.stats = stats;

      let max = -1;

      for(let i = 0; i < stats.length; i++){
        if(stats[i].count > max) {
          max = stats[i].count;
        }
      }

        var margin = { top: 40, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      var x = d3.scaleBand().rangeRound([0, width]);

      var y = d3.scaleBand().rangeRound([height, 0]);

      var xAxis = d3.axisBottom(x);

      var yAxis = d3.axisLeft(y);

      var svg = d3
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
          return d.count;
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
        .text("Frequency");

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
          return y(d.count);
        })
        .attr("height", function(d) {
          return height - y(d.count);
        });      },
      err => {
        alert(err);
      }
    );
  }
}
