import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from '../your-schedule/ride.model';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-all-suggest-rides',
  templateUrl: './all-suggest-rides.component.html',
  styleUrls: ['./all-suggest-rides.component.css']
})
export class AllSuggestRidesComponent implements OnInit {

  rides = [];
  rideSearch = {
    origin: '',
    dest: '',
    date: '',
    time: '',
   driver: '',
    id: ''
  };

  constructor(private httpClient: HttpClient, private router: Router) {

   }

  ngOnInit() {
    this.httpClient.get(`http://127.0.0.1:8080/ride/byUserId`).subscribe(
      (data: any) => {
        console.log('Search Request byUserId is successful ', data);
        this.rides = data.rides;

      },
      error => {
        console.log('Error byUserId:', error);
      }
    );
  }

}

