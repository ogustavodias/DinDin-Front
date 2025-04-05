import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:8081/auth';

  login(email: string, password: string) {
    const PATH = '/login';
    return this.http.post<AuthResponse>(this.API + PATH, {
      email: email,
      password: password,
    });
  }

  signUp(user: Partial<User>) {
    const PATH = '/register';
    return this.http.post<AuthResponse>(this.API + PATH, user);
  }
}
