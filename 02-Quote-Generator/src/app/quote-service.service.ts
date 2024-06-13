import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}
  private apiUrl =
    'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  getQuotesFromApi() {
    return this.http.get(this.apiUrl);
  }
}
