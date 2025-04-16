import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent {
  today: Date = new Date();
  year = this.today.getFullYear();
  month = String(this.today.getMonth() + 1).padStart(2, '0');
  day = String(this.today.getDate()).padStart(2, '0');
  maxDateFilter = `${this.year}-${this.month}-${this.day}`;

}
