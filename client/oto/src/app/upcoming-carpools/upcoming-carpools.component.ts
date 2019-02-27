import { Component, OnInit } from '@angular/core';
import { TimePickerComponent } from 'amazing-time-picker/src/app/atp-library/time-picker/time-picker.component';

@Component({
  selector: 'app-upcoming-carpools',
  templateUrl: './upcoming-carpools.component.html',
  styleUrls: ['./upcoming-carpools.component.css']
})
export class UpcomingCarpoolsComponent implements OnInit {


    rideDate: '';
    rideTime: '';
    numOfRiders: '';
    ridersImages = [];
    checked = '';
    listRiders = ['tal', 'gal', 'niv'];


  constructor() {

   }

  ngOnInit() {
  }

}
