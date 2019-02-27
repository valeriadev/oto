import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { TokenInterceptor } from '../services/token.service';
import { WebsocketService } from '../websocket.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private websocketService: WebsocketService) { }
  user = {
    password: '' ,
    email: ''
  };
  onLogin() {
    this.httpClient.post('http://127.0.0.1:8080/user/login', this.user).subscribe(
      (data:any) => {
        console.log('POST Request is successful', data);
        if(!(data && data.user && data.user.token)) {
          alert('Bad user info');
          return;
        }
        TokenInterceptor.token = data.user.token;
        this.websocketService.setUserLoggedIn(`${data.user.firstname} ${data.user.lastname}`);
        this.router.navigateByUrl('/user/homepage').then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }});
      },
      error => {
        console.log('Error', error)
      }
    );
  }
  ngOnInit() {

  }

}
