import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Links } from '../../../assets/links';
import { Link } from '../../models/link';

declare const M: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
	links = new Links;
	nav_links: Link[];

	constructor() { }

	ngOnInit(): void {
		this.nav_links = this.links.links;
	}

	ngAfterViewInit(): void {
		const sidenav = document.querySelectorAll('.sidenav');
		const instance = M.Sidenav.init(sidenav);
	}
}
