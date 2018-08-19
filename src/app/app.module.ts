import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen'
import { IonicStorageModule, Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';

import { User } from '../providers/user/user';
import { ModalPage } from '../pages/modal/modal';
import { Task } from '../providers/task/task';


@NgModule({
  declarations: [
    MyApp,
    ModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalPage,
  ],
  providers: [

    Contacts,
    SMS,
    CallNumber,
    User,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Task
  ]
})
export class AppModule {}
