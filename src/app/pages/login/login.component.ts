import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  tryLogin(e: SubmitEvent) {
    e.preventDefault();
    this.authService.login('teste@hotmail.com', 'teste').subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/welcome');
      },
    });
  }
}
