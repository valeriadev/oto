import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {UserProfileComponent} from '../user-profile/user-profile.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  user = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
