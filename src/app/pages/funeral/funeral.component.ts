import { Component, OnInit, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { GalleryItem } from 'src/app/models/gallery-item';

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
	
	service_images: GalleryItem[] = []; //caskets, pall bearers and hearse
	all_si: GalleryItem[] = [];
	si_categories = ['caskets', 'pall bearers', 'hearse'];
	si_url = '../../../assets/images/funeral/service_images/';

	portfolio_images: string[] = [];
	gallery_images: GalleryItem[] = [];

	si_folders = {'caskets': 9, 'hearse': 12, 'accessories': 6};
	
	intvl: any;

	carousel_switch: EventEmitter<string>;

	constructor() {
		this.carousel_switch = new EventEmitter<string>();
			
		for (const key in this.si_folders) {
			for (let i = 0; i < this.si_folders[key]; i++) {
				this.all_si.push({
					img: `${this.si_url}${key}/${(i+1)}.jpeg`,
					caption: '',
					category: key
				})
			} 
		}
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		const carousel = document.querySelectorAll('.carousel');
		const instance = M.Carousel.init(carousel, {fullWidth: true});		

		// instance.next()
		// this.intvl = setInterval(() => {
		// 	M.Carousel.getInstance(document.querySelector('.carousel')).next();
		// }, 2000);

		const modal = document.querySelectorAll('.modal');
		const m_instance = M.Modal.init(modal);

		this.carousel_switch.emit();
    
		this.carousel_switch.subscribe((x) => {
			var instance2 = M.Carousel.getInstance(carousel);
			switch (x) {
				case "next":
					carousel[0]['M_Carousel'].next();
					break;
				case "prev":
					carousel[0]['M_Carousel'].prev();
					break;
				case 'caskets':
					carousel[0]['M_Carousel'].set(0);
					break;
				case 'hearse':
					carousel[0]['M_Carousel'].set(9);
					break;
				case 'accessories':
					carousel[0]['M_Carousel'].set(20);
					break;				
			}			
		(err: Error) => console.error(err)});
	}

	ngOnDestroy(): void {
		// if (this.intvl) clearInterval(this.intvl)
	}
}
