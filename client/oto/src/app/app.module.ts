import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {MatButtonModule, MatExpansionModule, MatDatepickerModule,
   MatNativeDateModule, MatInputModule, MatCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';

// Components
import { NewDriveComponent } from './new-drive/new-drive.component';
import {StarRatingModule} from 'angular-star-rating';
import { VisitedProfileComponent } from './visited-profile/visited-profile.component';
import { CompleteRideComponent } from './complete-ride/complete-ride.component';
import { UpcomingCarpoolsComponent } from './upcoming-carpools/upcoming-carpools.component';
import { YourScheduleComponent } from './your-schedule/your-schedule.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { CreateRideComponent } from './create-ride/create-ride.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

// Google Maps
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


import { AgmDirectionModule } from 'agm-direction';
import {} from '@agm/core/services/google-maps-types';

import {MapsAPILoader} from '@agm/core';
// services
import { TokenInterceptor } from './services/token.service';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { LiveUsersComponent } from './live-users/live-users.component';
import { DestGraphDirective } from './dest-graph.directive';
import { CarSearchComponent } from './car-search/car-search.component';
import { PlaceAutocompleteComponent } from './place-autocomplete/place-autocomplete.component';

// social login
// import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { FirebaseAuth } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';


import { AuthService } from './core/auth.service';
import { UserResolver } from './home-page/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { UserService } from './core/user.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("Facebook-App-Id")
//   },
//   {
//     id: LinkedInLoginProvider.PROVIDER_ID,
//     provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
//   }
// ]);

// export function provideConfig() {
//   return config;
// }

import * as keys from './keys/keys.json';
import { RateRideComponent } from './rate-ride/rate-ride.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AllSuggestRidesComponent } from './all-suggest-rides/all-suggest-rides.component';

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
    UpcomingCarpoolsComponent,
    YourScheduleComponent,
    RegisterUserComponent,
    CreateRideComponent,
    MapComponent,
    ProfileEditComponent,
    LiveUsersComponent,
    DestGraphDirective,
    CarSearchComponent,
    PlaceAutocompleteComponent,
    RateRideComponent,
    AllSuggestRidesComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    MatListModule,
    FormsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    StarRatingModule.forRoot(),
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
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
    // SocialLoginModule,
    GooglePlaceModule,
    StarRatingModule,
    AgmCoreModule.forRoot({
      apiKey: keys.googleMapsKey,
      libraries: ['places'],
      apiVersion: '3.36'
    }),
    AgmDirectionModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFirestoreModule,
    MatSelectModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    UserService,
    UserResolver,
    AuthGuard,
    // {
    // provide: AuthServiceConfig,
    // useFactory: provideConfig
  // },
  AngularFireAuth,
  httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
