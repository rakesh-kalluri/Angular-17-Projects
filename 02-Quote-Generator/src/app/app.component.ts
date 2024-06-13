import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteViewComponent } from './quote-view/quote-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [QuoteViewComponent],
})
export class AppComponent {
  title = '02-Quote-Generator';
}
