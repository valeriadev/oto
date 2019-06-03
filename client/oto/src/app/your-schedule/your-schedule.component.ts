import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Ride } from './ride.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-schedule',
  templateUrl: './your-schedule.component.html',
  styleUrls: ['./your-schedule.component.css']
})
export class YourScheduleComponent implements OnInit {
  //user;
  weekRides: Ride[] = [];

  ride1 = {
    origin: '',
    dest: '',
    date: '',
    time: '',
    driver: '',
    id: ''
  };

  ride2 = {
    origin: '',
    dest: '',
    date: '',
    time: '',
    driver: '',
    id: ''
  };

  weekIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  tabs = [];
  selected = new FormControl(0);
  selectedDays = [];
  enteredTime = '';

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  ngOnInit() {
  }

  compareFn(pushedIndex, currentIndex): boolean {
    return pushedIndex > currentIndex;
  }

  addSelectedTab(day: string) {
    let clickedDayIndex = this.weekIndex.indexOf(day);
    for (let selectedDay of this.tabs) {
      if (selectedDay === day) {
        this.removeTab(this.tabs.indexOf(day));
        return;
      }
    }
    this.selectedDays.push(day);
    this.tabs.push(day);
    this.tabs.sort((a, b) => this.weekIndex.indexOf(a) >
      this.weekIndex.indexOf(b) ? 1 : this.weekIndex.indexOf(b) > this.weekIndex.indexOf(a) ? -1 : 0);
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('hello');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  onSaveChanges(tab: string) {
    this.ride1.date = tab;
    this.ride2.date = tab;
  }




  users: any = [];
  user = {
    _id : this.user,
  };




  getEntries() {
    this.httpClient.get('http://127.0.0.1:8080/user/validate').subscribe(
      (data: any) => {
        console.dir(data.users);
        this.httpClient.get(`http://127.0.0.1:8080/ride/search?driver=${this.user._id}`).subscribe(
          (data: any) => {
            console.log('Search Request is successful ', data);
            //alert(data.users.id);
            this.users = data;
            return data;
          },
          error => {
            console.log('Error', error);
          }
          
        );
      }
    );

  }
    
}
