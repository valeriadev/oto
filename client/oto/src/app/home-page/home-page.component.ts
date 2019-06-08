import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';

import { HttpClient } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {UserProfileComponent} from '../user-profile/user-profile.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private httpClient: HttpClient) { }

    ngOnInit(): void {
      this.route.data.subscribe(routeData => {
        const data = routeData['data'];
        if (data) {
          this.user = data;
          this.createForm(this.user.name);
        }
      });
    }

    createForm(name) {
      this.profileForm = this.fb.group({
        name: [name, Validators.required ]
      });
    }

    save(value) {
      this.userService.updateCurrentUser(value)
      .then(res => {
        console.log(res);
      }, err => console.log(err));
    }

    logout() {
      this.authService.doLogout()
      .then((res) => {
        this.location.back();
      }, (error) => {
        console.log('Logout error', error);
      });
    }

}
