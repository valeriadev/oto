import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'welcome', component: MainPageComponent },
  { path: 'user/register',  component: RegisterUserComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
