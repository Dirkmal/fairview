import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	@Input() background_img = '';
	@Input() captionTemplate: TemplateRef<any>;
	@Input() ctaTemplate: TemplateRef<any>
	
	constructor() { }

	ngOnInit(): void {
	}

}
