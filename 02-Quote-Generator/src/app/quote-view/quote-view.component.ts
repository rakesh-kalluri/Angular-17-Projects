import { Component, Inject, OnInit } from '@angular/core';
import { QuoteService } from '../quote-service.service';

@Component({
  selector: 'app-quote-view',
  standalone: true,
  imports: [],
  templateUrl: './quote-view.component.html',
  styleUrl: './quote-view.component.css',
})
export class QuoteViewComponent implements OnInit {
  quotes = [];
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getQuotesFromApi().subscribe((quotes) => {
      console.log(quotes);
    });
  }
}
