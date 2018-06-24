import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ICapsule } from '../../app/Models/ICapsule';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { ICapsulePart } from "../../app/Models/ICapsulePart";

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
    private spacexApi: SpacexApiProvider) {
      // On récupère l'objet de la capsule à afficher
      this.capsule = navParams.get("capsule");

      // On récupère les parts details
      this.spacexApi.getCapsuleDetailsById(this.capsule.id).subscribe(data => {
        this.capsuleParts = data;
      })
    }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
