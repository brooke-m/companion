import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AffirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affirmation',
  templateUrl: 'affirmation.html',
})
export class AffirmationPage {

  affirmations:string  = [
    "Self-care is how you take your power back.",
    "Every day and in every way I am getting better and better",
    "I know you're tired. I know you're physically and emotionally drained, but you have to keep going.",
    "Take your time healing, as long as you want. Nobody else knows what you've been through. How could they know how long it will take to heal you.",
    "My feelings are valid.",
    "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.",
    "Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.",
    "Slow down. Don't allow other to hurry your healing. It is a process, one that may take years, occasionally, even a lifetime - and that's OK.",
    "You deserve to heal.",
    "Happiness comes in waves, it'll find you again",
    "You aren’t the things that haunt you. You aren’t the pain you feel.",
    "You are enough. You have enough. You do enough.",
    "It is not overreacting to ask for what you want and need.",
    "You are strong for surviving.",
    "Mental illness is not a personal failure."
  ]

  selectAffirmation() {
    return this.affirmations[Math.floor(Math.random() * this.affirmations.length)];
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AffirmationPage');
  }

}
