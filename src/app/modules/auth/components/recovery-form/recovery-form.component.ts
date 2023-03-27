import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth/auth.service';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {
  form = this.formBuilder.nonNullable.group({
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [CustomValidators.MatchValidator('newPassword', 'confirmPassword')]
  });
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showConfirmPassword = false;
  status: RequestStatus = 'init';
  token = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.queryParamMap.subscribe(params => {
      const token = params.get('token');

      if (token) {
        this.token = token;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  doRecovery(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const { newPassword } = this.form.getRawValue();
    this.authService
      .changePassword(this.token, newPassword)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/login']);
        },
        error: () => {
          this.status = 'error';
        }
      })
  }
}
