import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    MainPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
