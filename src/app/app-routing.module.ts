import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FuneralComponent } from './pages/funeral/funeral.component';
import { PathologyComponent } from './pages/pathology/pathology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesGalleryComponent } from './pages/services-gallery/services-gallery.component';
import { Gallery2Component } from './pages/gallery2/gallery2.component';
import { FaqComponent } from './pages/faq/faq.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'funeral', component: FuneralComponent },
  { path: 'pathology', component: PathologyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: ServicesGalleryComponent },
  { path: 'gallery2', component: Gallery2Component },
  { path: 'help', component: FaqComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
