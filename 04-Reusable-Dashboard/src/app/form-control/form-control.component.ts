import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
})
export class FormControlComponent {
  filteredValue = output<string>();

  onFilterInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filteredValue.emit(input.value || '');
  }
}
