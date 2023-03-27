import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {
  form = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email, Validators.minLength(3)]]
  });
  status: RequestStatus = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  doSendEmail(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const { username } = this.form.getRawValue();
    this.authService
      .recoveryPassword(username)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.emailSent = true;
          this.router.navigate(['/login'])
        },
        error: () => {
          this.status = 'error';
        }
      })
  }
}
