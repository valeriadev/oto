import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  cars = [];
  car = {
    name : '',
  };


  ngOnInit() {
  }
  onCarSearch() {
    // tslint:disable-next-line: max-line-length
        this.httpClient.get(`http://127.0.0.1:8080/car/search?text=${this.car.name}`).subscribe(
          (data: any) => {
            console.log('Search Request is successful ', data);
            this.cars = data;

          },
          error => {
            console.log('Error', error);
          }

        );
      }

      constructor(private httpClient: HttpClient) {}

}
