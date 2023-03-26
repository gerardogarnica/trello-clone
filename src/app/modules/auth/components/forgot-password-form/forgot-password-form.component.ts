import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {
  form = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email, Validators.minLength(3)]]
  });
  status = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  doSendEmail(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';
    // TODO: Send email
  }
}
