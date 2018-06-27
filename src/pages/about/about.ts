import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { IAbout } from "../../app/Models/IAbout";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public abouts: IAbout;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAboutInformations({
      order: 'desc'
    }).subscribe(data => {
      console.log(data);
      this.abouts = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
}
