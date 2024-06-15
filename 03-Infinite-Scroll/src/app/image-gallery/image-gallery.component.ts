import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ImageGalleryService } from '../image-gallery.service';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  photos: any[] = [];
  private imageGalleryService = inject(ImageGalleryService);
  ready = false;
  imagesLoaded = 0;
  totalImages = 0;

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.ready = false;
    this.imageGalleryService.getPhotosFromApi().subscribe(
      (photos: any) => {
        this.photos = [...this.photos, ...photos]; // Append new photos to the existing array
        this.totalImages = this.photos.length;
        this.imagesLoaded = 0; // Reset the count of loaded images
        console.log('New images loaded, total images:', this.totalImages);
      },
      (error) => {
        console.error('Error fetching photos:', error);
      }
    );
  }

  imageLoaded() {
    this.imagesLoaded++;
    console.log(`Image loaded, current count: ${this.imagesLoaded}`);
    if (this.imagesLoaded === this.totalImages) {
      this.ready = true;
      console.log('All images loaded, setting ready to true');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      this.ready
    ) {
      console.log('Loading new images');
      this.getPhotos();
    }
  }
}
