import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { MainRoutingModule } from './main-routing.module';

// Components
import { BoardFormComponent } from './components/board-form/board-form.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Pages

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    BoardFormComponent,
    LayoutComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class MainModule { }
