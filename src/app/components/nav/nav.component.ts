import { Component, OnInit } from '@angular/core';
import { Links } from '../../../assets/links';
import { Link } from '../../models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	links = new Links;
	nav_links: Link[];

	constructor() { }

	ngOnInit(): void {
		this.nav_links = this.links.links;
	}

}
