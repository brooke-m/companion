import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AffirmationPage } from '../pages/affirmation/affirmation';
import { CrisisPage } from '../pages/crisis/crisis';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MoodPage } from '../pages/mood/mood';
import { SettingsPage } from '../pages/settings/settings';
import { TaskPage } from '../pages/task/task';
import { VentPage } from '../pages/vent/vent';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
