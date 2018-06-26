import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILauch } from '../../app/Models/ILauch';
import {LocalNotifications} from "@ionic-native/local-notifications";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider,
    private localNotification: LocalNotifications)
    {

      this.localNotification.schedule({
        id: 1,
        text: 'Single ILocalNotification',
        trigger: {at: new Date(new Date().getTime() + 40)},
        data: { secret: 'de' }
      });
      console.log(this.localNotification);
      this.spacexApi.getAllLaunches({
        order: 'desc'
      }).subscribe(data => {
        this.launches = data;
      })
    }

    youtubeVideo() {
    }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

}
