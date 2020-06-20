import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';


import { ServerInfoLoader } from './server-info-loader';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FuneralComponent } from './pages/funeral/funeral.component';
import { BannerComponent } from './components/banner/banner.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { PathologyComponent } from './pages/pathology/pathology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export function initializeApp(api_s: ServerInfoLoader) {
  return () => api_s.load();
}
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    NavComponent,
	FooterComponent,
	FuneralComponent,
	BannerComponent,
	FlipCardComponent,
	PathologyComponent,
	ContactComponent,
	AboutComponent
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
