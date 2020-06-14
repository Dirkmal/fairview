import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInterface } from './server-interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerInfoLoader {
    static settings: ServerInterface;

    constructor(private http: HttpClient) {}

    load() {
      const jsonFile = `assets/config/serverinfo.${environment.name}.json`;
      return new Promise<void>((resolve, reject) => {
        this.http.get(jsonFile).toPromise().then((response) => {
          ServerInfoLoader.settings = <ServerInterface>response;
          resolve();
        }).catch((response: any) => {
          reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
        });
      });
    }
}
