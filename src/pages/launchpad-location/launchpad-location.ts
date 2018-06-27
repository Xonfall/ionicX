import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ILaunchpad } from "../../app/Models/ILaunchpad";
import leaflet from 'leaflet';

@IonicPage()
@Component({
  selector: 'page-launchpad-location',
  templateUrl: 'launchpad-location.html',
})
export class LaunchpadLocationPage {
  private launchpad: ILaunchpad;
  private map: any;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams)
  {
    this.launchpad = navParams.get('launchpad');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    // On tinitialise la carte
    this.map = leaflet.map("map", {
      center: [this.launchpad.location.latitude, this.launchpad.location.longitude],
      zoom: 10
    })

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      minZoom: 3,
      maxZoom: 14
    }).addTo(this.map);

    // On rajoute un marqueur sur le point de lancement
    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([this.launchpad.location.latitude, this.launchpad.location.longitude]);
    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);
  }

}
