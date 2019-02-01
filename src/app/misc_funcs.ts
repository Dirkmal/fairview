import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

/**
 * Class of useful but unrelated functions
 */

export class Misc {
  /**
   * returns the size of a value in bytes as well as the unit (B, KB, e.t.c)
   * also checks if the size is greater than kilobytes
   * @param unformatted_size value whose size to check
   */
    getSize(unformatted_size: number) {
        let unit = 'B';
        let kb = false;

        if (unformatted_size < 1024) {
            unit = 'B';
        } else if (unformatted_size < 1024 * 1024) {
            unit = 'KB';
            unformatted_size /= 1024;
            kb = true;
        } else if (unformatted_size < 1024 * 1024 * 1024) {
            unit = 'MB';
            kb = true;
            unformatted_size = unformatted_size / 1024 / 1024;
        } else {
            unit = 'GB';
            kb = true;
            unformatted_size = unformatted_size / 1024 / 1024 / 1024;
        }

        return {size: Number(unformatted_size.toFixed(2)), _unit: unit, gtek: kb};
    }

    /**
     * Returns true if a variable is not null, undefined or empty
     * @param foo variable to check
     */
    isNotNull(foo): boolean {
      if (foo && foo !== null && foo !== undefined && foo !== '') {
        return true;
      }
      return false;
    }

    /**
     * returns the 'data' of a response by default.
     * returns 'status' of request if @param check_status is true.
     * returns true or false if there's no 'data', 'status' or response at all (null/undefined).
     * @param response the response whose content to check.
     * @param check_status false by default. Set to true to return response status (for post/put/delete requests).
     * if the data/message is null or undefined it returns the response message.
     */
    checkResponse(response: any, check_status = false) {
      let response_needed = 'data';

      if (check_status) {
        response_needed = 'status';
      }

      if (this.isNotNull(response)) {
        if (this.isNotNull(response[response_needed])) {
          return response[response_needed];
        } else {
          if (this.isNotNull(response['message'])) {
            this.responseMessage(response['message']);
            // return response['message'];
          }
          return false;
        }
      } else {
        return false;
      }
    }

    /**
     * Displays a given http error in a verbose manner
     * @param error the error of a http response
     */
    handleError(error: HttpErrorResponse) {
      console.log(error);
      if (error.error instanceof ErrorEvent) { // A client-side or network error
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}, ` +
          `error message: ${error.message}, ` +
          `error Text: ${error.error.text}.`);
      }
      return throwError(error.error.message);
    }

    responseMessage(message) {
      console.log(message);
      // this.alert_s.errorAlert(message);
    // TODO: add argument to every method for 'reporting error' which will return error messages to calling code
    }
}
