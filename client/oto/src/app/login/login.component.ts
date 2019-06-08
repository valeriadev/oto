import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.createForm();
    }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }
  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user/homepage']);
    });
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user/homepage']);
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user/homepage']);
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.router.navigate(['/user/homepage']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    });
  }

  /*
  user = {
    password: '' ,
    email: ''
  };
  onLogin() {
    this.httpClient.post('http://127.0.0.1:8080/user/login', this.user).subscribe(
      (data: any) => {
        console.log('POST Request is successful', data);
        if (!(data && data.user && data.user.token)) {
          alert('Bad user info');
          return;
        }
        TokenInterceptor.token = data.user.token;
        this.websocketService.setUserLoggedIn(`${data.user.firstname} ${data.user.lastname}`);
        this.router.navigateByUrl('/user/homepage').then(e => {
          if (e) {
            console.log('Navigation is successful!');
          } else {
            console.log('Navigation has failed!');
          }});
      },
      error => {
        console.log('Error', error);
      }
    );
  }
*/
}
