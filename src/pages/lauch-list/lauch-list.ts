import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILauch } from '../../app/Models/ILauch';

/**
 * Generated class for the LauchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lauch-list',
  templateUrl: 'lauch-list.html',
})
export class LauchListPage {
  public lauches: ILauch[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider)
    {
      this.spacexApi.getAllLaunches({
        order: 'desc'
      }).subscribe(data => {
        this.lauches = data;
      })
    }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
