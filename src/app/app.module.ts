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
import { NewTaskPage } from '../pages/new-task/new-task';

// import { FIREBASE_CONFIG } from './app.firebase.config'
// import { Firebase } from '@ionic-native/firebase';

import { AuthService } from '../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from './app.firebase.config';


@NgModule({
  declarations: [
    MyApp,
    ModalPage,
    NewTaskPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalPage,
    NewTaskPage,
  ],
  providers: [
    Contacts,
    SMS,
    CallNumber,
    User,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth,
  ]
})
export class AppModule {}
