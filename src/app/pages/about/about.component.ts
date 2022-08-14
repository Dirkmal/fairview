import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	banner_img = ['../../../assets/images/about/1.jpg'];
	profile = '../../../assets/images/about/2.jpg';

	constructor() { }

	ngOnInit(): void {
	}
}
