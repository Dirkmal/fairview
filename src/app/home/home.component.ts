import { Component, OnInit } from '@angular/core';
import { Banner } from '../banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  constructor() { }

  ngOnInit() { }

}
