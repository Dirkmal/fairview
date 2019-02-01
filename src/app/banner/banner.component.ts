import { Component, OnInit, Input } from '@angular/core';
import { Banner } from '../banner';
import { ServerInfoLoader as config } from '../server-info-loader';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() banner_: Banner;
  background_url: string;

  constructor() { }

  ngOnInit() {
    if (this.banner_) {
      this.background_url = 'url(' + config.settings.banners + this.banner_.banner_img + ')';
    }
  }

}
