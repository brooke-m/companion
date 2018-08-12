import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Keyboard } from 'ionic-angular';
import { User } from '../../providers/user/user';
/**
 * Generated class for the VentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vent',
  templateUrl: 'vent.html',
})
export class VentPage {
  userData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard, public viewController: ViewController, public userService: User) {
    this.userData = this.userService.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentPage');

  }

  showKeyboardCheck() {
    console.log('keyboard is working:', this.keyboard.isOpen());
  }
}
