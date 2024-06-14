import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const count = 10;
const apiKey = '';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

@Injectable({
  providedIn: 'root',
})
export class ImageGalleryService {
  constructor(private http: HttpClient) {}

  getPhotosFromApi() {
    return this.http.get<any>(apiUrl);
  }
}
