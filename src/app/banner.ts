export class Banner {
  banner_page: string;
  banner_type: string;
  banner_img: string;
  caption_top: string;
  caption_bottom: string;
  caption_desc: {title: string, exp: string}[];
  main_banner: boolean;
  button?: {button_text: string, button_position: string, button_link?: string};
}
