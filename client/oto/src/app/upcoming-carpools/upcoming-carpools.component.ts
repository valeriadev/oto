import { Component, OnInit } from '@angular/core';
import { TimePickerComponent } from 'amazing-time-picker/src/app/atp-library/time-picker/time-picker.component';

@Component({
  selector: 'app-upcoming-carpools',
  templateUrl: './upcoming-carpools.component.html',
  styleUrls: ['./upcoming-carpools.component.css']
})
export class UpcomingCarpoolsComponent implements OnInit {


    rideDate: '01.01.2019';
    rideTime: '10:00';
    numOfRiders: '3';
    ridersImages = [];
    checked = '';


  constructor() {

   }

  ngOnInit() {
  }

}
