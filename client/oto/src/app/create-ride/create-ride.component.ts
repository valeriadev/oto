import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent implements OnInit {
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
    this.httpClient.post('http://127.0.0.1:8080/ride/', this.ride).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  constructor(private httpClient: HttpClient) {}

  formattedAddress = '';

  public handleAddressChange(address: any) {
   this.formattedAddress = address.formatted_address;
   this.ride.origin = this.formattedAddress;
   }

}