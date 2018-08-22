import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

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
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Sleep',
        quote: 'It is good.',
        items: [
          { title: 'Completed:', note: '0' }
        ]
      },
      {
        name: 'Medication',
        quote: 'Try and take them at the same time every day',
        items: [
          { title: 'Completed:', note: '0' }
        ]
      },
      {
        name: 'Drink Water',
        quote: 'Stay hydrated!',
        items: [
          { title: 'Completed:', note: '0' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
