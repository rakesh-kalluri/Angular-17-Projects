import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from './quote-view/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}
  private apiUrl =
    'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  getQuotesFromApi() {
    return this.http.get<Quote[]>(this.apiUrl);
  }
}
