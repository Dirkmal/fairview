import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert: Alert;
  index = 0;
  alert_types = {ok: 'info', good: 'success', bad: 'warning', error: 'danger'};

  alerts_sender = new BehaviorSubject(this.alert);
  new_alert = this.alerts_sender.asObservable();

  constructor() { }

  sendAlert(alert: Alert) {
    this.alerts_sender.next(alert);
  }

  addAlert(alert: Alert) {
    this.sendAlert(alert);
  }

  createAlert(message: string,  dismissible = false, type = this.alert_types.ok): Alert {
    return new Alert(message, type, dismissible);
  }

  newAlert(message: string, dismissible = false) {
    const alert = this.createAlert(message, dismissible);
    this.addAlert(alert);
  }

  successAlert(message = 'Operation Successful', dismissible: boolean) {
    const alert = this.createAlert(message, dismissible, this.alert_types.good);
    this.addAlert(alert);
  }

  errorAlert(message = 'An error occurred', dismissible: boolean) {
    const alert = this.createAlert(message, dismissible, this.alert_types.error);
    this.addAlert(alert);
  }
}
