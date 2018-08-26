import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {
  task;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  setTask() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
