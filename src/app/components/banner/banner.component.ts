import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	@Input() images = [];
	@Input() slider: boolean;
	@Input() captionTemplate: TemplateRef<any>;
	@Input() ctaTemplate: TemplateRef<any>
	
	curr_slide = 0;
	background_img = ''

	constructor() { }

	ngOnInit(): void {
		this.background_img = this.images[this.curr_slide]
		if (this.slider) {
			setInterval(() => {
				this.setImage(this.images.length);
			}, 3000);
		}		
	}

	setImage(count) {				
		if (this.curr_slide >= (count - 1)) {
			this.curr_slide = -1;
		}

		this.curr_slide++;

		this.background_img = this.images[this.curr_slide]
		console.log('current slide is: ', this.curr_slide)
	}

}
