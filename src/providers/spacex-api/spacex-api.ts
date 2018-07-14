import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ILauch } from '../../app/Models/ILauch';
import { ICapsule } from '../../app/Models/ICapsule';
import { ICapsulePart } from "../../app/Models/ICapsulePart";
import { IRocket } from "../../app/Models/IRocket";
import { ILaunchpad } from "../../app/Models/ILaunchpad";
import { IAbout } from '../../app/Models/IAbout';
import {CacheService} from "ionic-cache";

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {
  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient, private cache: CacheService) {

  }

  /*
    Launches
   */
  getAllLaunches(params: any) :Observable<ILauch[]> {
    const endpointUrl = `${this.baseUrl}/launches/all`;
    let httpParams = Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
    let request = this.http.get<ILauch[]>(endpointUrl, {params: httpParams});
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'allLaunches', 5, 'all');
  }

  getNextLaunches(params: any) :Observable<ILauch[]> {
    const endpointUrl = `${this.baseUrl}/launches/upcoming`;
    let request = this.http.get<ILauch[]>(endpointUrl);
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'upcomingLaunches', 5, 'all');
  }

  getPastLaunches(params: any) :Observable<ILauch[]> {
    const endpointUrl = `${this.baseUrl}/launches`;
    let request = this.http.get<ILauch[]>(endpointUrl);
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'pastLaunches', 5, 'all');
  }

  /*
    Capsules
   */
  getAllCapsules(params: any) :Observable<ICapsule[]> {
    const endpointUrl = `${this.baseUrl}/capsules`;
    let request = this.http.get<ICapsule[]>(endpointUrl);
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'allCapsules', 5, 'all');
  }

  getCapsuleDetailsById(capsule_id: string) :Observable<ICapsulePart[]> {
    const endpointUrl = `${this.baseUrl}/parts/caps?capsule_id=`+capsule_id;
    let request = this.http.get<ICapsulePart[]>(endpointUrl);
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'capsuleDetailsById', 5, 'all');
  }

  /*
    Rockets
   */
  getAllRockets(params: any) :Observable<IRocket[]> {
    const endpointUrl = `${this.baseUrl}/rockets`;
    let request = this.http.get<IRocket[]>(endpointUrl);
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'rockets', 5, 'all');
  }

  /*
    Launchpads
   */
  getAllLaunchpads(params: any) :Observable<ILaunchpad[]> {
    const endpointUrl = `${this.baseUrl}/launchpads`;
    let request = this.http.get<ILaunchpad[]>(endpointUrl);
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'allLaunchpads', 5, 'all');
  }

  /*
    About
  */
  getAboutInformations(params: any) :Observable<IAbout> {
    const endpointUrl = `${this.baseUrl}/info`;
    let request = this.http.get<IAbout>(endpointUrl);
    return this.cache.loadFromDelayedObservable(endpointUrl, request, 'about', 5, 'all');
  }
}
