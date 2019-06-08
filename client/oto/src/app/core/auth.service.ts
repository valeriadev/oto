import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { TokenInterceptor } from "../services/token.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  clearGetToken;
  constructor(public afAuth: AngularFireAuth) {
    this.updateToken = this.updateToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.updateToken();
    this.clearGetToken = setInterval(this.updateToken, 50);
  }

  doFacebookAuth() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
          this.updateToken();
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  doGoogleAuth() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
          this.updateToken();
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  doTwitterAuth() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(authData) {
          console.log(authData);
          this.updateToken();
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  }

  async getToken() {
    const user = firebase.auth().currentUser;

    if (user) {
      return await user.getIdToken();
    }

    return Promise.resolve("");
  }

  async updateToken() {
    const token = await this.getToken();

    if (token && token !== "") {
      TokenInterceptor.token = token;
      clearInterval(this.clearGetToken);
    }
  }

  doRegister(value) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(value.email, value.password);
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res);
            this.updateToken();
          },
          err => reject(err)
        );
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
          this.updateToken();
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
          this.updateToken();
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
          this.updateToken();
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
}
