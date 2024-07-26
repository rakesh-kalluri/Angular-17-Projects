import { Component, computed, signal } from '@angular/core';
import { FormControlComponent } from '../form-control/form-control.component';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormControlComponent, DashboardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  items = signal([
    { title: 'Item1', value: 10 },
    { title: 'Item2', value: 20 },
    { title: 'Item3', value: 30 },
  ]);

  filterValue = signal('');

  filteredItems = computed(() =>
    this.items().filter((item) =>
      item.title.toLowerCase().includes(this.filterValue().toLowerCase())
    )
  );

  onReceivingFilteredInput(inputValue: string) {
    this.filterValue.set(inputValue);
  }
}
