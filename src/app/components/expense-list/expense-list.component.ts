import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { getPreviousThirtyDays, getToday } from 'src/app/utils/date';
getPreviousThirtyDays;
getToday;

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];
  today: string = getToday();
  previousThirtyDays: string = getPreviousThirtyDays();

  constructor(
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder
  ) {}

  filterForm: FormGroup = this.formBuilder.group({
    from: [this.previousThirtyDays],
    to: [this.today],
  });

  ngOnInit(): void {
    this.getExpensesInPeriod();
  }

  getExpensesInPeriod() {
    this.expenseService
      .getExpensesInPeriod(this.filterForm.value.from, this.filterForm.value.to)
      .subscribe({
        next: (response) => {
          this.expenses = response.expenses;
        },
      });
  }
}
