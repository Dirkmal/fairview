import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Mail } from '../models/mail';

@Injectable({
  	providedIn: 'root'
})
export class MailService {
	endpoint = 'http://localhost:9000/contact.php';

	constructor(private http: HttpClient) {
	}

	private handleError(error: HttpErrorResponse) {
		console.log(error);
		return throwError(error.error.message);
	}

	sendMail(mail: Mail): Observable<any> {
		return this.http.post(this.endpoint, {data: mail})
			.pipe(map((res) => {
				console.log(res);
				return res;
			}),
			catchError(this.handleError)
		);
	}
}
