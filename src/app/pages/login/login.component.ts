import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  errorOnSubmit: boolean = false;

  onSubmit() {
    this.errorOnSubmit = false;
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.authService.successInLogin();
        this.router.navigateByUrl('/home');
      },
      error: () => {
        this.errorOnSubmit = true;
      },
    });
  }
}
