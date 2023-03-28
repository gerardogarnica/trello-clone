import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardColorComponent } from '@shared/components/card-color/card-color.component';
import { MainButtonComponent } from '@shared/components/main-button/main-button.component';

@NgModule({
  declarations: [
    CardColorComponent,
    MainButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CardColorComponent,
    MainButtonComponent
  ]
})
export class SharedModule { }
