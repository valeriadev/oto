import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { EventEmitter } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  public  fullname: string;
  public  liveUsers: string[] = [];
  public  userLoggedIn: EventEmitter<string> = new EventEmitter();
  public  liveUsersChanged: EventEmitter<string[]> = new EventEmitter();
  private  socket;


  public  setUserLoggedIn(fullname: string) {

    this.socket = io("http://localhost:8081/");

    this.socket.on("new-user", data => {
      this.liveUsers.push(data.fullname);
      this.liveUsersChanged.emit(this.liveUsers);
    });

    this.socket.on("bye-user", data => {
      this.liveUsers.splice(data.fullname);
      this.liveUsersChanged.emit(this.liveUsers);
    });

    this.socket.emit("user-connected", {
      fullname:fullname
    });

    this.fullname = fullname;
    this.userLoggedIn.emit(this.fullname);
  }


}





