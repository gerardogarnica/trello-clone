import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth/auth.service';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
  });
  formUser = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email, Validators.minLength(3)]]
  });
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showConfirmPassword = false;
  showRegisterPanel = false;
  status: RequestStatus = 'init';
  statusFormUser: RequestStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  doRegister(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const { name, username, password } = this.form.getRawValue();
    this.authService
      .register(username, name, password)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/trello'])
        },
        error: () => {
          this.status = 'error';
        }
      })
  }

  validateUser(event: Event) {
    event.preventDefault();
    if (this.formUser.invalid) {
      this.formUser.markAllAsTouched();
      return;
    }

    this.statusFormUser = 'loading';
    this.showRegisterPanel = false;

    const { username } = this.formUser.getRawValue();
    this.authService
      .isAvailable(username)
      .subscribe({
        next: (response) => {
          this.statusFormUser = 'success';
          if (response.isAvailable) {
            this.form.controls.username.setValue(username);
            this.showRegisterPanel = true;
          }
          else {
            this.router.navigate(['/login'], {
              queryParams: { username }
            });
          }
        },
        error: () => {
          this.statusFormUser = 'error';
        }
      })
  }
}
