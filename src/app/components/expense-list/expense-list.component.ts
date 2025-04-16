import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent {
  today: Date = new Date();

  getPreviousThirtyDays() {
    let previousThirtyDays: Date = new Date();
    previousThirtyDays.setDate(this.today.getDate() - 30);
    const year = previousThirtyDays.getFullYear();
    const month = String(previousThirtyDays.getMonth() + 1).padStart(2, '0');
    const day = String(previousThirtyDays.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getToday() {
    const year = this.today.getFullYear();
    const month = String(this.today.getMonth() + 1).padStart(2, '0');
    const day = String(this.today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
