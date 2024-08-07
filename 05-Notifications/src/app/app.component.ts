import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'notifications';
}
