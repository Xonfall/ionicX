import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { INextLaunch } from "../../app/Models/INextLaunch";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})




export class HomePage {
  public nextLaunch: INextLaunch;
  public launch:any;
  public date:any;
  public interval:Number;
  public days:Number;
  public hours:Number;
  public minutes:Number;
  public secondes:Number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
    this.spacexApi.getNextLaunch().subscribe(data => {
      this.launch = data;
  
      this.date = this.launch.launch_date_unix - Math.round(Date.now() / 1000);
      setInterval(function () {
        this.interVal =  this.date--;

        this.days = Math.floor(this.date/86400);

        const hourSeconds = this.date % 86400;
        this.hours = Math.floor(hourSeconds/3600);

        const minuteSeconds = hourSeconds % 3600;
        this.minutes = Math.floor(minuteSeconds / 60);

        const remainingSeconds = minuteSeconds % 60;
        this.secondes = Math.ceil(remainingSeconds);

        clearInterval(this.interval);
      }.bind(this), 1000);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
