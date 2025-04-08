import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { User } from '../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private auth: AuthService, private formBuilder: FormBuilder) {}

  signUpForm: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    password: [''],
  });

  errorOnSubmit: boolean = false;

  onSubmit() {
    let user: Partial<User> = this.signUpForm.value;

    this.auth.signUp(user).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: () => {
        this.errorOnSubmit = true;
      },
    });
  }
}
