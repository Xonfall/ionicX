import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunchpad } from "../../app/Models/ILaunchpad";

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {
  public launchpads: ILaunchpad[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider)
  {
    this.spacexApi.getAllLaunchpads({
      order: 'desc'
    }).subscribe(data => {
      this.launchpads = data;
    })
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
