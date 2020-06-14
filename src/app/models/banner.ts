export class Banner {
	img: string;
	banner_text?: {
		text: string,
		position: string
	}[];
	cta?: {
		text: string,
		position: string,
		link?: string
	}
}
