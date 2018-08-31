import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user/user';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  userData:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: User) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.userService.load();
  }

}
