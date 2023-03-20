import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html'
})
export class MainButtonComponent {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() colorStyle: 'danger' | 'primary' | 'shadow' | 'success' = 'primary';

  get colors(): any {
    return {
      'text-white': this.colorStyle === 'danger' || this.colorStyle === 'primary' || this.colorStyle === 'success',
      'text-black': this.colorStyle === 'shadow',
      'bg-danger-600': this.colorStyle === 'danger',
      'hover:bg-danger-800': this.colorStyle === 'danger',
      'focus:ring-danger-300': this.colorStyle === 'danger',
      'bg-primary-600': this.colorStyle === 'primary',
      'hover:bg-primary-800': this.colorStyle === 'primary',
      'focus:ring-primary-300': this.colorStyle === 'primary',
      'bg-gray-200': this.colorStyle === 'shadow',
      'hover:bg-gray-500': this.colorStyle === 'shadow',
      'focus:ring-gray-50': this.colorStyle === 'shadow',
      'bg-success-600': this.colorStyle === 'success',
      'hover:bg-success-800': this.colorStyle === 'success',
      'focus:ring-success-300': this.colorStyle === 'success'
    };
  }
}
