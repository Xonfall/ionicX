import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ICapsule } from '../../app/Models/ICapsule';

@IonicPage()
@Component({
  selector: 'page-capsule-details',
  templateUrl: 'capsule-details.html',
})
export class CapsuleDetailsPage {
  private capsule: ICapsule;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.capsule = navParams.get("capsule");
    }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
