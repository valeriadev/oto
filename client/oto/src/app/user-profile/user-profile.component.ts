import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TokenInterceptor } from '../services/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  myControl = new FormControl();
  users = [];


  constructor(private httpClient: HttpClient, private router: Router) {

  }

  user: any = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: ''
  };

  isEdit = false;

  ngOnInit() {

    if (!TokenInterceptor.token) {
      this.router.navigateByUrl('/user/login');
    }

    this.httpClient.get('http://127.0.0.1:8080/user/validate').subscribe(
      (data: any) => {
        this.user = data.user;
      },
      error => {
        console.log('Error', error);
      }
    );

    this.httpClient.get('http://127.0.0.1:8080/users').subscribe(
      (users: any) => {
        this.users = users;
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  save() {
    this.httpClient
      .post('http://127.0.0.1:8080/user/update', this.user)
      .subscribe(
        (data: any) => {
          this.user = data.user;
          this.isEdit = false;
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  delete() {
    this.httpClient
      .delete('http://127.0.0.1:8080/user')
      .subscribe(
        (data: any) => {
          this.user =  {};
          this.isEdit = false;

          this.router.navigateByUrl('/welcome');
        },
        error => {
          console.log('Error', error);
        }
      );
  }

}
