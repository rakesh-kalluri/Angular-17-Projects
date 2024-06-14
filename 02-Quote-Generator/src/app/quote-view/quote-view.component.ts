import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote-service.service';
import { Quote } from './quote.model';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-quote-view',
  standalone: true,
  templateUrl: './quote-view.component.html',
  styleUrl: './quote-view.component.css',
  imports: [LoadingSpinnerComponent],
})
export class QuoteViewComponent implements OnInit {
  quotes: Quote[] = [];
  constructor(private quoteService: QuoteService) {}
  currentQuote: Quote = { author: '', text: '' };
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.quoteService.getQuotesFromApi().subscribe((quotes) => {
      this.quotes = quotes;
      console.log(this.quotes);
      this.displayRandomQuote();
      this.loading = false;
    });
  }

  displayRandomQuote() {
    this.loading = true;
    const randomNumber = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomNumber];
    if (!this.currentQuote.author) {
      this.currentQuote.author = 'Unknown';
    }
    this.loading = false;
  }

  tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${this.currentQuote.text} - ${this.currentQuote.author}`;
    window.open(tweetUrl, '_blank');
  }
}
