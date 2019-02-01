import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AlertComponent } from './alert/alert.component';

import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ServerInfoLoader } from './server-info-loader';

export function initializeApp(api_s: ServerInfoLoader) {
  return () => api_s.load();
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgbAlertModule,
    NgbModule.forRoot()
  ],
  providers: [
    ServerInfoLoader,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ServerInfoLoader],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
