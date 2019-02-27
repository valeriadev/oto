import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatExpansionModule, MatDatepickerModule,
   MatNativeDateModule, MatInputModule, MatCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];
// Components
import { NewDriveComponent } from './new-drive/new-drive.component';
import {StarRatingModule} from 'angular-star-rating';
import { VisitedProfileComponent } from './visited-profile/visited-profile.component';
import { CompleteRideComponent } from './complete-ride/complete-ride.component';

import { CreateRideComponent } from './create-ride/create-ride.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';

// Google Maps
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmDirectionModule } from 'agm-direction';
//services
import { TokenInterceptor } from "./services/token.service";



@NgModule({
  declarations: [
    AppComponent,
    CompleteRideComponent,
    VisitedProfileComponent,
    NewDriveComponent,
    MainPageComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomePageComponent,
    UserProfileComponent,
    RegisterUserComponent,
    CreateRideComponent,
    MapComponent

  ],
  imports: [
    MatToolbarModule,
    StarRatingModule.forRoot(),
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AmazingTimePickerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,

    StarRatingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    GooglePlaceModule,
    AgmDirectionModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
