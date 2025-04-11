import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthResponse } from '../models/auth-response';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';

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

  activeUser: Partial<User> = { name: '', email: '' };

  getUserByToken() {
    return this.http.get<AuthResponse>(this.API).pipe(
      tap((response) => {
        this.authService.successInLogin();
        this.setActiveUser(response);
        this.router.navigate(['/home']);
      })
    );
  }

  setActiveUser(authResponse: AuthResponse) {
    this.activeUser = { email: authResponse.email, name: authResponse.name };
  }
}
