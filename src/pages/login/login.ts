import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../models/user';

import { firebaseConfig } from '../../app/app.firebase.config'
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private fire: AngularFireAuth, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    try {
      this.fire.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.navCtrl.setRoot('MenuPage');
      })
      .catch(() => {
        let alert = this.alertCtrl.create({
          title: 'Wrong email or password',
          subTitle: 'Try again',
          buttons: ['Dismiss']
          });
          alert.present();
      });
    }
    catch (e) {
      console.error(e);
    }

  }

  async register() {
    this.navCtrl.push('RegisterPage');
  }
}
