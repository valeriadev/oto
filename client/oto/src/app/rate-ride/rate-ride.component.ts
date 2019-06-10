import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-ride',
  templateUrl: './rate-ride.component.html',
  styleUrls: ['./rate-ride.component.css']
})
export class RateRideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /*
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
  }\
  */
}
