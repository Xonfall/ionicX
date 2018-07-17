import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams} from 'ionic-angular';
import { ICapsulePart } from "../../../app/Models/ICapsulePart";

@IonicPage()
@Component({
  selector: 'page-capsule-part',
  templateUrl: 'capsule-part.html',
})
export class CapsulePartPage {
  private capsulePart: ICapsulePart;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams) {
      // On récupère l'objet de la capsule à afficher
      this.capsulePart = navParams.get("capsulePart");
    }

  private capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
