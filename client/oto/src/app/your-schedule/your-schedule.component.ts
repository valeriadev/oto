import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-your-schedule',
  templateUrl: './your-schedule.component.html',
  styleUrls: ['./your-schedule.component.css']
})
export class YourScheduleComponent implements OnInit {

  dayDef = {
    rideDay: '',
    from: '',
    to: '',
    depTime: '',
    arrivalTime: ''
  };

  departure = '';
  weekIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  tabs = [];
  selected = new FormControl(0);
  selectedDays = [];
  enteredTime = '';

  constructor() { }

  ngOnInit() {
  }

  compareFn(pushedIndex, currentIndex ): boolean {
    return pushedIndex > currentIndex;
  }

  addSelectedTab(day: string) {
    let clickedDayIndex = this.weekIndex.indexOf(day);
    for (let selectedDay of this.tabs) {
      if(selectedDay === day) {
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

  saveChanges(tab: string){

  }

}
