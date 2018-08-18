import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
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

   quote: string = "";

  affirmations: string[]  = [
    "Self-care is how you take your power back.",
    "Every day and in every way I am getting better and better",
    "I know you're tired. I know you're physically and emotionally drained, but you have to keep going.",
    "My feelings are valid.",
    "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.",
    "Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.",
    "You deserve to heal.",
    "Happiness comes in waves, it'll find you again",
    "You aren’t the things that haunt you. You aren’t the pain you feel.",
    "You are enough. You have enough. You do enough.",
    "It is not overreacting to ask for what you want and need.",
    "You are strong for surviving.",
    "Mental illness is not a personal failure."
  ];

  selectAffirmation() {
    this.quote = this.affirmations[(Math.floor(Math.random() * 13))];
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private cdRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.selectAffirmation();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AffirmationPage');
  }

}
