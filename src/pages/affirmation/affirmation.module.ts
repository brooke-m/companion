import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffirmationPage } from './affirmation';

@NgModule({
  declarations: [
    AffirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(AffirmationPage),
  ],
})
export class AffirmationPageModule {}
