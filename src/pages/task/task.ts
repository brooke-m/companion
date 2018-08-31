import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalPage } from '../modal/modal';
import { NewTaskPage } from '../new-task/new-task';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

//----------------//

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController) {
  }

   openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }

  openNewTaskModal(){
    let modal = this.modalCtrl.create(NewTaskPage);
    modal.present();
  }

  presentToast() {
  const toast = this.toastCtrl.create({
    message: 'Nice!!',
    duration: 2000
  });
  toast.present();
}

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Task',
    subTitle: 'Tracking the things you need to do and how often you complete them :)',
    buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }
}
