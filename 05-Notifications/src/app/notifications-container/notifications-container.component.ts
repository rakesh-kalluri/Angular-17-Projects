import { NotificationService } from './../notification.service';
import { Component, computed, inject } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { Notification } from '../models/notification.model';

@Component({
  selector: 'app-notifications-container',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './notifications-container.component.html',
  styleUrl: './notifications-container.component.css',
})
export class NotificationsContainerComponent {
  private notificationService = inject(NotificationService);

  notifications = computed(() => {
    console.log(this.notificationService.getAllNotifications());
    return this.notificationService.getAllNotifications();
  });

  removeNotification(id: string) {
    this.notificationService.removeNotification(id);
  }
}
