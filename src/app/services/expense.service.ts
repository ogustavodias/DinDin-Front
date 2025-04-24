import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  private API = 'http://localhost:8081/expense';

  getExpensesInPeriod(from: string, to: string) {
    const PATH = '/in-period';
    const PARAMS = new HttpParams().set('from', from).set('to', to);
    return this.http.get<{ expenses: Expense[] }>(this.API + PATH, {
      params: PARAMS,
    });
  }
}
