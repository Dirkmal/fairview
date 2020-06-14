import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';


import { ServerInfoLoader } from './server-info-loader';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

export function initializeApp(api_s: ServerInfoLoader) {
  return () => api_s.load();
}
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
