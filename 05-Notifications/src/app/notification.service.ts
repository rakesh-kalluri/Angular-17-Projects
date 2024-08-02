import { Injectable, signal } from '@angular/core';
import { Notification } from './models/notification.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  notifications = signal<Notification[]>([]);

  getAllNotifications = this.notifications.asReadonly();

  addNotification(notification: Notification) {
    if (!notification.id) {
      notification.id = uuidv4();
    }
    this.notifications.update((prevNotications) => [
      ...prevNotications,
      notification,
    ]);
    if (notification.duration > 0) {
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, notification.duration);
    }
  }

  removeNotification(id: string) {
    this.notifications.update((prevNotifications) =>
      [...prevNotifications].filter((notification) => notification.id !== id)
    );
  }
}
