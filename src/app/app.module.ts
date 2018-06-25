import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LauchListPage } from '../pages/lauch-list/lauch-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { HttpClientModule } from '@angular/common/http';
import { CapsuleDetailsPage } from "../pages/capsule-details/capsule-details";
import { RocketListPage } from "../pages/rocket-list/rocket-list";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LauchListPage,
    RocketListPage,
    CapsuleListPage,
    CapsuleDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LauchListPage,
    RocketListPage,
    CapsuleListPage,
    CapsuleDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider
  ]
})
export class AppModule {}