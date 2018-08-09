import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentPage } from './vent';

@NgModule({
  declarations: [
    VentPage,
  ],
  imports: [
    IonicPageModule.forChild(VentPage),
  ],
})
export class VentPageModule {}
