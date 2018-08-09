import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrisisPage } from './crisis';

@NgModule({
  declarations: [
    CrisisPage,
  ],
  imports: [
    IonicPageModule.forChild(CrisisPage),
  ],
})
export class CrisisPageModule {}
