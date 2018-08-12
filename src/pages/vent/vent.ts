import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewContoller, Keyboard } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard, public viewContoller: ViewContoller) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentPage');

  }

  showKeyboard() {
    this.keyboard.show();
    console.log('keyboard is working:', this.keyboard.isOpen());
  }
}
