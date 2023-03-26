import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faEye, faEyeSlash, faPen } from '@fortawesome/free-solid-svg-icons';

import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth/auth.service';

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
  status: RequestStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService : AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const username = params.get('username');
      if (username) {
        this.form.controls.username.setValue(username);
      }
    });
  }

  doLogin(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const { username, password } = this.form.getRawValue();
    this.authService
      .login(username, password)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/trello']);
        },
        error: () => {
          this.status = 'error';
        }
      });
  }
}
