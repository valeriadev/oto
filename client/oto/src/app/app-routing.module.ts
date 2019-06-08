import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import { CompleteRideComponent} from './complete-ride/complete-ride.component';
import { AuthGuard } from './core/auth.guard';
import { UserResolver } from './home-page/user.resolver';

export const rootRouterConfig: Routes = [
  { path: 'welcome', component: MainPageComponent },
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},
  { path: 'user/register',  component: RegisterUserComponent, canActivate: [AuthGuard] },
  {path: 'user/login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: 'user/homepage', component: HomePageComponent, resolve: { data: UserResolver}},
  {path: 'ride/complete', component: CompleteRideComponent},
  { path: '**', component: PageNotFoundComponent }
];

