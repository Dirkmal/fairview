import { Component, OnInit } from '@angular/core';
import { GalleryItem } from 'src/app/models/gallery-item';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.scss']
})
export class Gallery2Component implements OnInit {
  src_dir = '../../../assets/images/';
  
  gallery_images: GalleryItem[] = [];
  
  constructor() { 
    for (let i = 0; i < 18; i++) {
			this.gallery_images.push({
				img: `${this.src_dir}funeral/portfolio/${(i+1)}.jpeg`,
        caption: '12th Jun, 2021',
        category: 'Funeral'
      });			
		}

    for (let i = 0; i < 2; i++) {
			this.gallery_images.push({
				img: `${this.src_dir}pathology/${(i+1)}.jpg`,
        caption: '3rd Apr, 2020',
        category: 'Lab'
      });			
		}
  }
  
  ngOnInit(): void {
  }

}
