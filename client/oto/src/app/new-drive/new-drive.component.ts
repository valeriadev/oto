import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-drive',
  templateUrl: './new-drive.component.html',
  styleUrls: ['./new-drive.component.css']
})
export class NewDriveComponent implements OnInit {

  rides = [];
  rideSearch = {
    origin: '',
    dest: '',
    date: '',
    time: '',
   // driver: '',
   // id: ''
  };
  ngOnInit() {
   /* this.setDest = this.newDest;
    this.setOrigin = this.newOrigin;
    this.setDate = this.newDate;
    this.setTime = this.newTime;*/
  }
  onSearchRide() {
    this.httpClient.get(`http://127.0.0.1:8080/ride/search?date=${this.rideSearch.date}&dest=${this.rideSearch.dest}&origin=${this.rideSearch.origin}`).subscribe(
      (data : any)=> {
        console.log('Search Request is successful ', data);
        this.rides = data;
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  constructor(private httpClient: HttpClient) {}
}
