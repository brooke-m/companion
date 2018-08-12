import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  AffirmationPageRoot: any = 'AffirmationPage';
  CrisisPageRoot: any = 'CrisisPageRoot';
  HomePageRoot: any = 'HomePageRoot';
  MoodPageRoot: any = 'MoodPageRoot';
  SettingsPageRoot: any = 'SettingsPageRoot';
  TaskPageRoot: any = 'TaskPageRoot';
  VentPageRoot: any = 'VentPageRoot';
  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
