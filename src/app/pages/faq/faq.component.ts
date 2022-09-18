import { Component, OnInit } from '@angular/core';

declare const M: any;


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  banner_img = ['../../../assets/images/help/b2.jpg'];
  constructor() { }

  ngOnInit(): void {
    M.AutoInit()
  }

}
