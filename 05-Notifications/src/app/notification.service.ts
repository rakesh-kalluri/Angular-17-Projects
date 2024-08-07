import { Injectable, signal } from '@angular/core';
import { Notification } from './models/notification.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications = signal<Notification[]>([]);

  constructor() {
    this.loadInitialData();
  }

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

  loadInitialData() {
    const initialNotifications: Notification[] = [
      {
        id: uuidv4(),
        type: 'success',
        message: 'This is a success notification!',
        duration: 5000,
        dismissible: true,
      },
      {
        id: uuidv4(),
        type: 'error',
        message: 'This is an error notification!',
        duration: 5000,
        dismissible: true,
      },
      {
        id: uuidv4(),
        type: 'info',
        message: 'This is an info notification!',
        duration: 5000,
        dismissible: true,
      },
      {
        id: uuidv4(),
        type: 'warning',
        message: 'This is a warning notification!',
        duration: 5000,
        dismissible: true,
      },
    ];

    initialNotifications.forEach((notification) =>
      this.addNotification(notification)
    );
  }
}
