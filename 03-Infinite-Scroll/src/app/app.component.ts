import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ImageGalleryComponent],
})
export class AppComponent {
  title = 'Infinite-Scroll';
}
