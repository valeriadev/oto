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

  constructor(private httpClient: HttpClient) { }
  onLogin() {
    this.httpClient.post('http://127.0.0.1:8080/user/homepage', 1).subscribe(
      data => {
        console.log('POST Request is successful', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  ngOnInit() {
  }

}
