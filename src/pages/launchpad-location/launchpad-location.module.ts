import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchpadLocationPage } from './launchpad-location';

@NgModule({
  declarations: [
    LaunchpadLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchpadLocationPage),
  ],
})
export class LaunchpadLocationPageModule {}
