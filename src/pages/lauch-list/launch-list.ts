import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILauch } from '../../app/Models/ILauch';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {RocketDetailsPage} from "../rocket-details/rocket-details";
import {LaunchDetailsPage} from "../launch-details/launch-details";

/**
 * Generated class for the LauchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lauch-list',
  templateUrl: 'launch-list.html',
})
export class LauchListPage {
  public launches: ILauch[];
  public defaultPropertie;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider,
    private localNotification: LocalNotifications
  )
  {
    this.defaultPropertie = 'arrow-down';
    this.allLaunches();
  }

  viewDetailsLaunche(launchDetails) {
    this.navCtrl.push(LaunchDetailsPage,{
      launchDetails: launchDetails
    });
  }

  nextLaunches() {
    this.spacexApi.getNextLaunches({
      order: 'desc'
    }).subscribe(data => {
      this.launches = data;
    })
  }

  pastLaunches() {
    this.spacexApi.getPastLaunches({
      order: 'desc'
    }).subscribe(data => {
      this.launches = data;
    })
  }

  allLaunches() {
    this.spacexApi.getAllLaunches({
      order: 'desc'
    }).subscribe(data => {
      this.launches = data;
    })
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
