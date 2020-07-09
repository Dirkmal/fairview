import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FuneralComponent } from './pages/funeral/funeral.component';
import { BannerComponent } from './components/banner/banner.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { PathologyComponent } from './pages/pathology/pathology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
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
	FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
