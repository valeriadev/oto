import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  user = {
    firstname: 'This is firstname',
    lastname: 'Dana',
    phone: '050-0000000',
    email: 'email@gmail.com',
    country: 'Israel',
    city: 'RishonLeZion',
    street: 'EliVizel',
    number: '2'
  };

  ngOnInit() {
    this.httpClient.get('http://127.0.0.1:8080/user/search' + this.user.email ).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
