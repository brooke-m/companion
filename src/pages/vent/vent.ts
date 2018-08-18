import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Keyboard } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { AlertController } from 'ionic-angular';
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
  message:string = "";
  messages:any = [];
  deleteTimer:number = 7000;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard, public viewController: ViewController, public userService: User) {
    this.userData = this.userService.load();
    // this.messages = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentPage');
  }

  addMessage() {
    this.messages.push({
      message: this.message
    });

    this.message = '';

    setInterval(() => {
      this.removeMessages();
    }, this.deleteTimer);
  }

  removeMessages() {
    this.messages.shift();
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Vent',
    subTitle: 'This is a place to vent to the ETHER!',
    buttons: ['Dismiss']
    });
    alert.present();
  }
}
