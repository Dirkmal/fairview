import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
	banner_img = '../../../assets/images/pathology/1.jpg';
	flip_card_bg = '../../../assets/images/pathology/2.jpg';

	constructor() { }

	ngOnInit(): void {
	}

}
