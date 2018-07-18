import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LaunchDetailsPage } from "../pages/launch-details/launch-details";
import { RocketDetailsPage } from "../pages/rocket-details/rocket-details";
import { LaunchpadListPage } from "../pages/launchpad-list/launchpad-list";
import { LaunchpadLocationPage } from "../pages/launchpad-location/launchpad-location";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LauchListPage } from '../pages/lauch-list/launch-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { HttpClientModule } from '@angular/common/http';

import { CapsuleDetailsPage } from "../pages/capsule-details/capsule-details";
import { CapsulePartPage } from "../pages/capsule-details/capsule-part/capsule-part";
import { RocketListPage } from "../pages/rocket-list/rocket-list";
import { LocalNotifications } from "@ionic-native/local-notifications";

import { CacheModule } from "ionic-cache";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RocketListPage,
    RocketDetailsPage,
    CapsuleListPage,
    CapsuleDetailsPage,
    CapsulePartPage,
    LauchListPage,
    LaunchDetailsPage,
    LaunchpadListPage,
    LaunchpadLocationPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RocketListPage,
    RocketDetailsPage,
    CapsuleListPage,
    CapsuleDetailsPage,
    CapsulePartPage,
    LauchListPage,
    LaunchDetailsPage,
    LaunchpadListPage,
    LaunchpadLocationPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider,
    LocalNotifications
  ]
})
export class AppModule {}
