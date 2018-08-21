import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { User } from '../../models/user';

import { firebaseConfig } from '../../app/app.firebase.config'
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
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

  constructor(private fire: AngularFireAuth, private toast: ToastController, private auth: AuthService, public navParams: NavParams, public navCtrl: NavController) {
    // Set the active tab based on the passed index from menu.ts
  }

  ionViewDidLoad() {
    this.fire.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: "Welcome to Companion, " + data.email,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'Could not load',
          duration: 3000
        }).present();
      }
    });
    console.log('ionViewDidLoad HomePage');
  }

}
