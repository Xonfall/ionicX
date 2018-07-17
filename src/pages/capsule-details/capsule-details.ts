import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ICapsule } from '../../app/Models/ICapsule';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { ICapsulePart } from "../../app/Models/ICapsulePart";
import {CapsuleListPage} from "../capsule-list/capsule-list";
import {CapsulePartPage} from "./capsule-part/capsule-part";

@IonicPage()
@Component({
  selector: 'page-capsule-details',
  templateUrl: 'capsule-details.html',
})
export class CapsuleDetailsPage {
  private capsule: ICapsule;
  private capsuleParts: ICapsulePart[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider,
    public modalCtrl: ModalController) {
      // On récupère l'objet de la capsule à afficher
      this.capsule = navParams.get("capsule");

      // On récupère les parts details
      this.spacexApi.getCapsuleDetailsById(this.capsule.id).subscribe(data => {
        this.capsuleParts = data;
      })
    }

  private showPart(capsulePart: ICapsulePart) {
    const modal = this.modalCtrl.create(CapsulePartPage, {capsulePart: capsulePart});
    modal.present();
  }

  private capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
