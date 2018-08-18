import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen'
//import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts } from '@ionic-native/contacts';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';

import { User } from '../providers/user/user';
// import { User } from '../pages/login/login';
// import { AffirmationPage } from '../pages/affirmation/affirmation';
// import { CrisisPage } from '../pages/crisis/crisis';
// import { HomePage } from '../pages/home/home';
// import { MenuPage } from '../pages/menu/menu';
// import { MoodPage } from '../pages/mood/mood';
// import { SettingsPage } from '../pages/settings/settings';
// import { TaskPage } from '../pages/task/task';
// import { VentPage } from '../pages/vent/vent';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)//,
    //IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Contacts,
    SMS,
    CallNumber,
    User,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
