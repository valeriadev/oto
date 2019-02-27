import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  user = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    street: "",
    number: 2
  };

  isEdit = false;

  ngOnInit() {
    this.httpClient.get("http://127.0.0.1:8080/user/validate").subscribe(
      (data: any) => {
        this.user = data.user;
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  save() {
    alert("Save the motherfucker!!");
  }
}
