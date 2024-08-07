import { Component, input, output } from '@angular/core';
import { Notification } from '../models/notification.model';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  notification = input.required<Notification>();
  dismissNotification = output<string>();

  dismiss() {
    this.dismissNotification.emit(this.notification().id);
  }
}
