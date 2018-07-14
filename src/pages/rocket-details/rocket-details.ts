import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IRocket } from '../../app/Models/IRocket';

@IonicPage()
@Component({
  selector: 'page-rocket-details',
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {
  public rocket: IRocket;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  {
    this.rocket = navParams.get("rocket");
  }

  public capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
