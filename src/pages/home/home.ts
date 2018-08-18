import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user/user';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  myIndex: number;

  userData:any;
  constructor(public navParams: NavParams, public userService: User) {
    // Set the active tab based on the passed index from menu.ts
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.userService.load();
  }

}
