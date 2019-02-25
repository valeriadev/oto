import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from 'angular-star-rating';

@Component({
  selector: 'app-complete-ride',
  templateUrl: './complete-ride.component.html',
  styleUrls: ['./complete-ride.component.css']
})

export class CompleteRideComponent implements OnInit {

  enteredComment = '';
  enteredRating = 1;
  date = '';
  totalRiders = '';
  destination = '';

  constructor() { }

  ngOnInit() {
  }

  onFinsihRating() {
    alert(this.enteredComment);
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.enteredRating = $event.rating;
    console.log('onRatingUpdated : ' + this.enteredRating);
  }
}
