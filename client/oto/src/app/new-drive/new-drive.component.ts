import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-drive',
  templateUrl: './new-drive.component.html',
  styleUrls: ['./new-drive.component.css']
})
export class NewDriveComponent implements OnInit {
  newDest = '';
  newOrigin = '';
  newDate = '';
  newTime = '';
  setDest = '';
  setTime = '';
  setOrigin = '';
  setDate = '';

  constructor() { }

  ngOnInit() {
    this.setDest = this.newDest;
    this.setOrigin = this.newOrigin;
    this.setDate = this.newDate;
    this.setTime = this.newTime;
  }

}
