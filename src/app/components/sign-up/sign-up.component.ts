import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private auth: AuthService) {}

  trySignUp(e: SubmitEvent) {
    e.preventDefault();
    let testUser: Partial<User> = {email: "testando@hotmail.com", name: "teste", password: "testandotestando"};
    this.auth.signUp(testUser).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
