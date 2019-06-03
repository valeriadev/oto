import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isLoading = true;
  user = {};

  constructor(private httpClient: HttpClient,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }
  ngOnInit() {
    this.ngZone.run(() => {
      this.mapsAPILoader.load().then(() => {
        this.isLoading = false;
      });
    });
  }

}
