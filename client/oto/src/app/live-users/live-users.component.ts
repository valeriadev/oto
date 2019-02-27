import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "../websocket.service";

@Component({
  selector: "app-live-users",
  templateUrl: "./live-users.component.html",
  styleUrls: ["./live-users.component.css"]
})
export class LiveUsersComponent implements OnInit {
  liveUsers = [];
  a = 2;

  constructor(private websocketService: WebsocketService) {
    this.websocketService.liveUsersChanged.subscribe(data => {
      this.liveUsers = [...data];
    });
  }

  //https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial/
  ngOnInit() {}

  indexTracker(index: number, value: any) {
    return index;
  }
}
