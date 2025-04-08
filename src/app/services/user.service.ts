import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthResponse } from '../models/auth-response';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  private API = 'http://localhost:8081/user';

  getUserByToken() {
    return this.http.get<AuthResponse>(this.API).pipe(
      tap((response) => {
        this.authService.successInLogin();
        this.router.navigate(['/home']);
      })
    );
  }
}
