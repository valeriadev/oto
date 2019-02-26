import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

// initial center position for the map
public lat: Number = 31.969883;
public lng: Number = 34.772262;
public origin: any;
public destination: any;

constructor() { }

getDirection() {
  this.origin = { lat: 31.969883, lng: 34.772262 };
  this.destination = { lat: 32.044205, lng: 34.757874 };
}

ngOnInit() {
  this.getDirection();
}
}



