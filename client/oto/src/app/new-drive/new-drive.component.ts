import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PeriodicElement} from './PeriodElement.module'
import { Ride } from '../your-schedule/ride.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-new-drive',
  templateUrl: './new-drive.component.html',
  styleUrls: ['./new-drive.component.css']
})



export class NewDriveComponent implements OnInit {

  displayedColumns: string[] = ['origin', 'dest', 'date', 'time', 'driver', 'id'];
  ELEMENT_DATA: Ride[];

  rides = [];
  
  formattedAddress;
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
// tslint:disable-next-line: max-line-length
    this.httpClient.get(`http://127.0.0.1:8080/ride/search?date=${this.rideSearch.date}&dest=${this.rideSearch.dest}&origin=${this.rideSearch.origin}`).subscribe(
      (data: any) => {
        console.log('Search Request is successful ', data);
        this.rides = data;

      },
      error => {
        console.log('Error', error);
      }

    );
  }


  rateRide(id) {
    this.router.navigateByUrl(`/ride/complete?id=${id}`);
  }
  public handleOriginAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    this.rideSearch.origin = this.formattedAddress;
  }
  public handleDestAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    this.rideSearch.dest = this.formattedAddress;
  }

  constructor(private httpClient: HttpClient, private router: Router) {}
}
