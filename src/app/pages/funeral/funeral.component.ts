import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

declare const M: any;
@Component({
  selector: 'app-funeral',
  templateUrl: './funeral.component.html',
  styleUrls: ['./funeral.component.css']
})
export class FuneralComponent implements OnInit, AfterViewInit, OnDestroy {
	images = '../../../assets/images/funeral/'
	banner_img = [this.images + '1.jpg'];
	flip_bg = this.images + '2.jpg';
	flip_bg2 = this.images + '4.jpg';

	portfolio_images: string[] = [];

	intvl: any;
	constructor() {
		for (let i = 0; i < 18; i++) {
			this.portfolio_images.push(
				this.images + 'portfolio/' + (i+1) + '.jpeg'
			);			
		}
	}

	ngOnInit(): void {
		
	}

	ngAfterViewInit(): void {
		const carousel = document.querySelectorAll('.carousel');
		const instance = M.Carousel.init(carousel);		

		this.intvl = setInterval(() => {
			M.Carousel.getInstance(document.querySelector('.carousel')).next();
		}, 2000);
	}

	ngOnDestroy(): void {
		if (this.intvl) clearInterval(this.intvl)
	}
}
