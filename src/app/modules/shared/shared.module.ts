import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainButtonComponent } from '@shared/components/main-button/main-button.component';

@NgModule({
  declarations: [
    MainButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    MainButtonComponent
  ]
})
export class SharedModule { }
