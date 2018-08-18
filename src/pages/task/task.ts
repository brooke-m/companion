import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  taskName:string='Eat shit';
  taskKey:string='';
  taskDescription:string='to eat some poo';
  timesCompleted:number=3;
  taskNameToDisplay:string='';

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  newTask() {
    this.taskKey = this.taskName;

    this.storage.set(this.taskKey, {
      title: this.taskName,
      description: this.taskDescription,
      completed: this.timesCompleted
    });
    console.log(this.storage.get(this.taskKey));
  }

  displayTask() {
    this.storage.get(this.taskKey).then((data)=>{
      this.var=data;
      this.taskNameToDisplay = this.var.title;
    });
    console.log(this.taskNameToDisplay);
  }
}
