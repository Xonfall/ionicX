import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ILauch } from "../../app/Models/ILauch";

/**
 * Generated class for the LaunchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-details',
  templateUrl: 'launch-details.html',
})
export class LaunchDetailsPage {
  public launchDetail: ILauch;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launchDetail = navParams.get("launchDetails");
    console.log(this.launchDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailsPage');
  }

}
