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
  revealSetContact:boolean = false;
  contactSet:boolean = false;
  number:string = '';
  lastName:string = '';
  firstName:string = '';
  name:string;
  revealHelplines:boolean = false;
  revealAddContact:boolean = false;
  revealNewContact:boolean = true;
  constructor(private alertCtrl: AlertController, private contact: Contacts, public navCtrl: NavController, public navParams: NavParams, public sms: SMS, public callNum: CallNumber) {

  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Crisis Page',
    subTitle: 'Need help? Call someone from your cantact list or send them pre written a TXT',
    buttons: ['Dismiss']
    });
    alert.present();
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
      this.presentTxtAlert();
      console.log('TXT triggered');
    }).catch((err)=>{
      alert(JSON.stringify(err))
    });
  }

  presentTxtAlert() {
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
      this.showSelectedContact();
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


      console.log('New contact saved: ', newContact);
    }
    catch(e) {
      console.log(e);
    }
    this.hideNewContact();
    this.showSelectedContact();
  }

  showNewContact(){
    this.revealNewContact = false;
    this.revealAddContact = true;
  }

  hideNewContact() {
    this.revealNewContact = true;
    this.revealAddContact = false;
  }

  helpline(helplineName, helplineNumber) {
    this.firstName = helplineName;
    this.number = helplineNumber;
    this.showSelectedContact();
    this.call();
  }

  txtHotline(helplineNumber) {
    this.number = helplineNumber;
    this.firstName = 'Helpline';
    this.txt();
  }

  showHelplines() {
    this.revealHelplines ? this.revealHelplines = false :this.revealHelplines = true;
  }

  hideHelplines() {
    this.revealHelplines = false;
  }

  showFooter() {
    this.contactSet = true;
  }

  showSelectedContact() {
    this.revealSetContact = true;
    this.showFooter();
  }
}
