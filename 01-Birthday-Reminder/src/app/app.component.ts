import { Component } from '@angular/core';
import data from '../data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Birthday-Reminder';
  people = data;

  handleButtonClick() {
    this.people = [];
  }
}
