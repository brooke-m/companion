import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { Contacts, ContactField, ContactName, ContactFindOptions, ContactFieldType } from '@ionic-native/contacts';
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

  number:string = '';
  lastName:string = '';
  firstName:string = '';
  name:string;

  constructor(private alertCtrl: AlertController, private contact: Contacts, public navCtrl: NavController, public navParams: NavParams, public sms: SMS, public callNum: CallNumber) {

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
      this.presentAlert();
      console.log('TXT triggered');
    }).catch((err)=>{
      alert(JSON.stringify(err))
    });
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Crisis Txt Sent',
    message: 'Txt sent to: ' + this.firstName,
    buttons: ['Thanks']
    });
    alert.present();
  }

  async getContacts() {
    try {
      const selectedContact = await this.contact.pickContact();
      alert('Retrieved: ' + selectedContact.displayName);
      this.name = selectedContact.displayName;
      this.number = selectedContact.phoneNumbers[0].value;
      console.log('Selected contact: ', selectedContact);
    }
    catch(e) {
      console.log(e);
    }
  }

  async addContact() {
    try {
      const newContact = this.contact.create();

      newContact.name = new ContactName(null, this.lastName, this.firstName);

      newContact.phoneNumbers = [new ContactField('mobile', this.number)];

      await newContact.save();

      this.name = newContact.displayName;
      console.log('New contact saved: ', newContact);
    }
    catch(e) {
      console.log(e);
    }
  }
}
