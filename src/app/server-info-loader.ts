import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ServerInterface } from './server-interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerInfoLoader {
    static settings: ServerInterface;

    constructor(private http: Http) {}

    load() {
      const jsonFile = `assets/config/serverinfo.${environment.name}.json`;
      return new Promise<void>((resolve, reject) => {
        this.http.get(jsonFile).toPromise().then((response: Response) => {
          ServerInfoLoader.settings = <ServerInterface>response.json();
          resolve();
        }).catch((response: any) => {
          reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
        });
      });
    }
}
