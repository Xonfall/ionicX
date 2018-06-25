import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ILauch } from '../../app/Models/ILauch';
import { ICapsule } from '../../app/Models/ICapsule';
import { ICapsulePart } from "../../app/Models/ICapsulePart";
import { IRocket } from "../../app/Models/IRocket";
import { IAbout } from '../../app/Models/IAbout';

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {
  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient) {

  }

  /*
    Launches
   */
  getAllLaunches(params: any) :Observable<ILauch[]> {
    const endpointUrl = `${this.baseUrl}/launches/all`;
    const httpParams = Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());

    return this.http.get<ILauch[]>(endpointUrl);
  }

  getNextLaunches(params: any) :Observable<ILauch[]> {
    const endpointUrl = `${this.baseUrl}/launches/upcoming`;

    return this.http.get<ILauch[]>(endpointUrl);
  }

  getPastLaunches(params: any) :Observable<ILauch[]> {
    const endpointUrl = `${this.baseUrl}/launches`;

    return this.http.get<ILauch[]>(endpointUrl);
  }

  /*
    Capsules
   */
  getAllCapsules(params: any) :Observable<ICapsule[]> {
    const endpointUrl = `${this.baseUrl}/capsules`;
    return this.http.get<ICapsule[]>(endpointUrl);
  }

  getCapsuleDetailsById(capsule_id: string) :Observable<ICapsulePart[]> {
    const endpointUrl = `${this.baseUrl}/parts/caps?capsule_id=`+capsule_id;
    return this.http.get<ICapsulePart[]>(endpointUrl);
  }

  /*
    Rockets
   */
  getAllRockets(params: any) :Observable<IRocket[]> {
    const endpointUrl = `${this.baseUrl}/rockets`;
    return this.http.get<IRocket[]>(endpointUrl);
  }

  /*
    About
  */
  getAboutInformations(params: any) :Observable<IAbout> {
    const endpointUrl = `${this.baseUrl}/info`;

    return this.http.get<IAbout>(endpointUrl);
  }
}
