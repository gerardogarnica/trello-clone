import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {
  form = this.formBuilder.nonNullable.group({
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [ CustomValidators.MatchValidator('newPassword', 'confirmPassword') ]
  });
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showConfirmPassword = false;
  status = 'init';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  doRecovery(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';
    // TODO: Recovery
  }
}
