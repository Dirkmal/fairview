import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	banner_img = '../../../assets/images/home/1.jpg';
	flip_card_bg = '../../../assets/images/home/2.jpg';
	
	constructor() { }

	ngOnInit(): void {
	}

}
