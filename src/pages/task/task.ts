import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalPage } from '../modal/modal';
// import { TaskProvider } from '../../providers/task/task';
/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  task:any;

  taskName:string='';
  taskKey:string='';
  taskDescription:string='';
  timesCompleted:number=0;
  taskNameToDisplay:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  
   openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  createTask() {
    this.taskKey = this.taskName;

    this.storage.set(this.taskKey, {
      title: this.taskName,
      description: this.taskDescription,
      completed: this.timesCompleted
    });
    console.log(this.storage.get(this.taskKey));
  }

  newTask() {
    this.createTask();
  }

  incrementTask() {
    this.storage.get(this.taskKey).then((data)=>{
      var task = data;

      task.completed += 1;

      this.timesCompleted = task.completed;

      this.storage.set(this.taskKey, task)
    });
  }

  getTask(key) {
    this.storage.get(key).then((data)=>{
      this.task = data;
    });
  }

  displayTaskName() {
    this.storage.get(this.taskKey).then((data)=>{
      this.taskNameToDisplay = data.title;
    });

    console.log(this.taskNameToDisplay);
  }
}
