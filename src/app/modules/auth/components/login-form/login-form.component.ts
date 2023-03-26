import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  form = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPen = faPen;
  showPassword = false;
  status = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  doLogin(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';
    // TODO: Login
  }
}
