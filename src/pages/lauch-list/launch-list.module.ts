import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LauchListPage } from './launch-list';

@NgModule({
  declarations: [
    LauchListPage,
  ],
  imports: [
    IonicPageModule.forChild(LauchListPage),
  ],
})
export class LauchListPageModule {}
