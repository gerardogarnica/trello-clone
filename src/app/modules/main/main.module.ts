import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { MainRoutingModule } from './main-routing.module';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Pages

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class MainModule { }
