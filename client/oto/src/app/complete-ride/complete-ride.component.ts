import { Component, OnInit } from "@angular/core";
import { componentFactoryName } from "@angular/compiler";
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from "angular-star-rating";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-complete-ride",
  templateUrl: "./complete-ride.component.html",
  styleUrls: ["./complete-ride.component.css"]
})
export class CompleteRideComponent implements OnInit {
  review = {
    rating: 5,
    notes: "",
    user: { firstname: "", lastname: "", _id:'' },
    ride: { origin: "", dest: "", date: "", time: "", driver: "", _id:'' }
  };

  rideId;
  rideObject;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = (this.route.queryParams as any).value.id;

    if (id) {
      this.rideId = id;
      this.httpClient
        .get(`http://localhost:8080/ride/byId?id=${this.rideId}`)
        .subscribe(ride => {
          this.rideObject = ride;
          this.review.user = this.rideObject.driver;
          this.review.ride = this.rideObject;
        });
    }
  }

  onFinsihRating() {
    this.httpClient
      .post('http://127.0.0.1:8080/review/ride', {
        rating: this.review.rating,
        review: this.review.notes,
        driverId: this.review.user._id,
        rideId: this.review.ride._id
      })
      .subscribe(
        data => {
          console.log('POST Request is successful', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.review.rating = $event.rating;
    console.log("onRatingUpdated : " + this.review.rating);
  };
}
