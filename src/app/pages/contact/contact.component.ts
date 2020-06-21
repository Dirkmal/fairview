import { Component, OnInit } from '@angular/core';
import { Mail } from '../../models/mail';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	mail = new Mail;

	constructor(private mailer: MailService) { }

	ngOnInit(): void {
	}

	sendMessage(f) {
		if (this.mail !== null) {
			this.mailer.sendMail(this.mail).subscribe((res) => {
				if (res && res.status === 200) {
					console.log(res);
					alert("Your message has been sent and we will respond as soon as posible");
					f.reset();
				} else {
					console.log(res);
					alert("An error occurred sending your message. Please try again");
				}
			});
		}
	}
}
