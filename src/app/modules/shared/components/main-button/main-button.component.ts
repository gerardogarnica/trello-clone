import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Colors, COLORS } from '@models/colors.model';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html'
})
export class MainButtonComponent {

  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() colorStyle: Colors = 'primary';

  faSpinner = faSpinner;

  mapColors = COLORS;

  get colors() {
    const classes = this.mapColors[this.colorStyle];
    return classes ? classes : {};
  }
}
