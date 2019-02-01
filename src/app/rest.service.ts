import { Injectable } from '@angular/core';
import { ServerInfoLoader as config } from './server-info-loader';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Banner } from './banner';
import { Misc } from './misc_funcs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = config.settings.apiUrl;
  misc = new Misc;

  constructor(private http: HttpClient) { }

  getBanners(banner_page: string): Observable<Banner[]> {
    const ops = new HttpParams().set('page', banner_page);
    return this.http.get(this.apiUrl + config.settings.banners, {params: ops})
      .pipe(map(res => {
          return this.misc.checkResponse(res);
        })
      );
  }
}
