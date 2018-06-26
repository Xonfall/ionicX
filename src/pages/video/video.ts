import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private domSanitizer: DomSanitizer)
  {}

  viewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/MLleDRkSuvk")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }
}
