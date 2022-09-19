import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from 'src/app/models/gallery-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  all = 'all';

  @Input() items: GalleryItem[];
  categories = []

  constructor() { }

  ngOnInit(): void {
    //get unique categories
    this.categories = this.items.map((item => item.category)).filter((value, index, self) => {
      return self.indexOf(value) === index
    });    
  }

  toggleVisible(filter) {
    if (filter == 'all') {
      document.querySelectorAll(`.filter`).forEach(item => {
        item['hidden'] = false;
      })   
    } else {
      document.querySelectorAll(`.filter`).forEach(item => {
        item['hidden'] = true;        
      }) 
      document.querySelectorAll(`.${filter}`).forEach(item => {
        item['hidden'] = false;
      }) 
    }
  }


}
