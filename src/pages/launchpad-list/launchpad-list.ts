import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunchpad } from "../../app/Models/ILaunchpad";
import { LaunchpadLocationPage } from "../launchpad-location/launchpad-location";
import {RocketDetailsPage} from "../rocket-details/rocket-details";
import {IRocket} from "../../app/Models/IRocket";

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {
  private launchpads: ILaunchpad[];
  private rockets: IRocket[];
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

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

  openModalWithParams(launchpad) {
    let myModal = this.modalCtrl.create(LaunchpadLocationPage, { 'launchpad': launchpad });
    myModal.present();
  }

  // Recherche la rocket associé en cas de click et ouvre une page des détails
  rocketDetailPage(rocketName){
    this.spacexApi.getAllRockets({
      order: 'desc'
    }).subscribe(data => {
      this.rockets = data;
    });

    // En cas d'erreur de connexion, on ne fait rien
    if(this.rockets==null) {
      return;
    }

    // On récupère les rockets et on compare le nom avec ceux de la liste
    for(let i=0; i<this.rockets.length; i++) {
      if(this.rockets[i].name == rocketName) {
        this.navCtrl.push(RocketDetailsPage,  {
          rocket: this.rockets[i]
        });
        return;
      }

    }
  }

  isKnownStatus(status: string) {
    if(status=='active') {
      return 'active';
    } else if(status=='retired') {
      return 'retired';
    } else if(status=='under construction') {
      return 'under construction';
    }

    return null;
  }

}
