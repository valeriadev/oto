import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent implements OnInit {
  dates = [];
  index = 0;
  ride = {
    origin: '',
    dest: '',
    date: '',
    time: '',
    driver: '',
    id: ''
  };
  ngOnInit() {

  }
  onAddRide() {
    this.dates.forEach(date => this.writeRideToDB(date));
    this.dates = [];
    this.index = 0;
  }
  onDatePicker(event: MatDatepickerInputEvent<Date>) {
    this.dates.push( event.value);
  }

  removeDate(index) {
    this.dates.splice(index, 1);
    // this.dates.delete(index);
  }
  constructor(private httpClient: HttpClient) { }

  formattedAddress = '';

  public handleOriginAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    this.ride.origin = this.formattedAddress;
  }
  public handleDestAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    this.ride.dest = this.formattedAddress;
  }
  public writeRideToDB(date) {
    this.ride.date = new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())).toUTCString();

    console.dir(this.ride);
    this.httpClient.post('http://127.0.0.1:8080/ride/', this.ride).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  };

}
