import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";

const routes: Routes = [
  { path: 'welcome', component: MainPageComponent },
  { path: 'user/register',  component: RegisterUserComponent },
  {path: 'user/login', component: LoginComponent},
  {path: 'user/homepage', component: HomePageComponent},
  {path: 'user/update', component: ProfileEditComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
