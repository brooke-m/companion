import { HomePage } from '../home/home';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams } from 'ionic-angular';
import { firebaseConfig } from '../../app/app.firebase.config'
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'HomePage';
  userData:any;
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Affirmation Page', pageName: 'AffirmationPage', index: 0 },
    { title: 'Crisis Page', pageName: 'CrisisPage', index: 1 },
    { title: 'Mood Page', pageName: 'MoodPage', index: 2 },
    { title: 'Task Page', pageName: 'TaskPage', index: 3 },
    { title: 'Vent Page', pageName: 'VentPage', index: 4},
    { title: 'Settings Page', pageName: 'SettingsPage', index: 5},
    { title: 'Home Page', pageName: 'HomePage', index: 6},
  ];

  constructor(private fire: AngularFireAuth, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
    this.userData = navParams.data.userData;
  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  logout(){
    this.fire.auth.signOut();
    this.navCtrl.setRoot('LoginPage')
  }

}
