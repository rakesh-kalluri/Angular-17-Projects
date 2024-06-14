import { Component, OnInit, inject } from '@angular/core';
import { ImageGalleryService } from '../image-gallery.service';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent implements OnInit {
  private imageGalleryService = inject(ImageGalleryService);

  ngOnInit(): void {
    this.imageGalleryService.getPhotosFromApi().subscribe((images) => {
      console.log(images);
    });
  }
}