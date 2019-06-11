import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from '../your-schedule/ride.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-rate-ride',
  templateUrl: './rate-ride.component.html',
  styleUrls: ['./rate-ride.component.css']
})
export class RateRideComponent implements OnInit {

 public rides = [];

  formattedAddress;
  rideSearch = {
    origin: '',
    dest: '',
    date: '',
    time: '',
   // driver: '',
   // id: ''
  };
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpClient.get(`http://127.0.0.1:8080/ride/passenger`).subscribe(
      (data: any) => {
        console.log('Search Request byUserId passenger is successful ', data);
        this.rides = data.rides;

      },
      error => {
        console.log('Error byUserId:', error);
      }
    );
  }


  public rateRide(id) {
    this.router.navigateByUrl(`/ride/complete?id=${id}`);
  }


}

