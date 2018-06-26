import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunchpad } from "../../app/Models/ILaunchpad";
import { LaunchpadLocationPage } from "../launchpad-location/launchpad-location";

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {
  public launchpads: ILaunchpad[];

  myParam = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private spacexApi: SpacexApiProvider)
  {
    this.spacexApi.getAllLaunchpads({
      order: 'desc'
    }).subscribe(data => {
      this.launchpads = data;
    })
  }

  openModalWithParams(launchpad) {
    let myModal = this.modalCtrl.create(LaunchpadLocationPage, { 'launchpad': launchpad });
    myModal.present();
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
