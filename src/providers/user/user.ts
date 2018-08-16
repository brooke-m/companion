// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class User {
  user:any = []
  constructor() {

  }

  load() {
    return this.user[0];
  }

  addUser(userData) {
    this.user = [
      {userName: userData}
    ];
  }
}
