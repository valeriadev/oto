import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from 'angular-star-rating';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {NewDriveComponent} from '../new-drive/new-drive.component';

@Component({
  selector: 'app-complete-ride',
  templateUrl: './complete-ride.component.html',
  styleUrls: ['./complete-ride.component.css']
})

export class CompleteRideComponent implements OnInit {
  review = {
    rating : 5 ,
    notes : '',
    user : UserProfileComponent,
    ride : NewDriveComponent,
  };

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onFinsihRating() {
    this.httpClient.post('http://127.0.0.1:8080/review/ride', this.review).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.router.navigateByUrl('/user/login');

      },
      error => {
        console.log("Error", error);
      }
    );
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.review.rating = $event.rating;
    console.log('onRatingUpdated : ' + this.review.rating);
  }
}
