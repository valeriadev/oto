import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

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
  }

}
