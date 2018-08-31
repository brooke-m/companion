import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  task;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var tasks = [
      {
        name: 'This is a task name',
        quote: 'This is where you would put the task description',
        completed: 0
      },
      {
        name: 'Medication',
        quote: 'Try and take them at the same time every day',
        completed: 0
      },
      {
        name: 'Drink Water',
        quote: 'Stay hydrated!',
        completed: 5
      }
    ];
    this.task = tasks[this.params.get('charNum')];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
