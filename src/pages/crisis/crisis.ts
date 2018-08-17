import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the CrisisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crisis',
  templateUrl: 'crisis.html',
})
export class CrisisPage {

  number:string = "0271231234";

  constructor(public navCtrl: NavController, public navParams: NavParams, public sms: SMS, public callNum: CallNumber) {

  }

  call() {
    this.callNum.callNumber(this.number, true).then(() => {
      console.log('Call triggered');
    }).catch((err) => {
      alert(JSON.stringify(err))
    });
  }

  txt() {
    var options: {
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send(this.number, 'Crisis Alert', options).then(()=>{
      console.log('TXT triggered');
    }).catch((err)=>{
      alert(JSON.stringify(err))
    });
  }


}
