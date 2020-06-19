import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
	/**
	 * Can only have either a background image or a background color on a card.
	 * If a card has a background image, the opposite side has a background color.
	 * In unlikely event of requiring a combination of both =>
	 * add the style object as a third param to Object.assign
	 */
	left_card_style: {[key: string]: string} = {};
	right_card_style: {[key: string]: string} = {};

	@Input() leftCard: TemplateRef<any>;
	@Input() rightCard: TemplateRef<any>;

	@Input() set left_bg(bg: string) {
		this.left_card_style = Object.assign({}, {'background-image': 'url(' + bg + ')'});
	}

	@Input() set right_bg(bg: string) {
		this.right_card_style = Object.assign({}, {'background-image': 'url(' + bg + ')'});
	}

	@Input() set left_bg_col(col: string) {
		this.left_card_style = Object.assign({}, {'background-color': col});
	}

	@Input() set right_bg_col(col: string) {
		this.right_card_style = Object.assign({}, {'background-color': col});
	}

	constructor() { }

	ngOnInit(): void {
	}
}
