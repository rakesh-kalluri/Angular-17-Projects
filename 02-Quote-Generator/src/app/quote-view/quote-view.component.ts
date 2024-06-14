import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote-service.service';
import { Quote } from './quote.model';

@Component({
  selector: 'app-quote-view',
  standalone: true,
  imports: [],
  templateUrl: './quote-view.component.html',
  styleUrl: './quote-view.component.css',
})
export class QuoteViewComponent implements OnInit {
  quotes: Quote[] = [];
  constructor(private quoteService: QuoteService) {}
  currentQuote: Quote = { author: '', text: '' };

  ngOnInit(): void {
    this.quoteService.getQuotesFromApi().subscribe((quotes) => {
      this.quotes = quotes;
      console.log(this.quotes);
      this.displayRandomQuote();
    });
  }

  displayRandomQuote() {
    const randomNumber = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomNumber];
    if (!this.currentQuote.author) {
      this.currentQuote.author = 'Unknown';
    }
  }
}
