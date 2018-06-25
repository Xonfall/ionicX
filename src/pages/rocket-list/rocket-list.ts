import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { IRocket } from '../../app/Models/IRocket';
import { RocketDetailsPage } from "../rocket-details/rocket-details";

@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {
  public rockets: IRocket[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider)
  {
    this.spacexApi.getAllRockets({
      order: 'desc'
    }).subscribe(data => {
      this.rockets = data;
    })
  }

  rocketDetailPage(rocket){
    this.navCtrl.push(RocketDetailsPage,  {
      rocket: rocket
    });
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
