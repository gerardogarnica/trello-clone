import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html'
})
export class MainButtonComponent {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() colorStyle: 'danger' | 'primary' | 'shadow' | 'success' = 'primary';

  mapColors = {
    success: {
      'text-white': true,
      'bg-success-600': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true
    },
    danger: {
      'text-white': true,
      'bg-danger-600': true,
      'hover:bg-danger-800': true,
      'focus:ring-danger-300': true
    },
    primary: {
      'text-white': true,
      'bg-primary-600': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true
    },
    shadow: {
      'text-black': true,
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true
    }
  }

  get colors(): any {
    const colors = this.mapColors[this.colorStyle];

    if (colors) {
      return colors;
    }

    return {};
  }
}
