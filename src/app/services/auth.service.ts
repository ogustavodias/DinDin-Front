import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private API = 'http://localhost:8081/auth';
  private isAuthenticated = false;

  login(user: Partial<User>) {
    const PATH = '/login';
    return this.http.post<AuthResponse>(this.API + PATH, user).pipe(
      tap((response) => {
        this.successInLogin();
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      })
    );
  }

  signUp(user: Partial<User>) {
    const PATH = '/register';
    return this.http.post<AuthResponse>(this.API + PATH, user).pipe(
      tap((response) => {
        this.successInLogin();
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      })
    );
  }

  successInLogin() {
    this.isAuthenticated = true;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
