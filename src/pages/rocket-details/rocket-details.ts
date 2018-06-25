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

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
