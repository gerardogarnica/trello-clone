import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ProfileRoutingModule } from './profile-routing.module';

// Components

// Pages
import { ProfileComponent } from './pages/profile/profile.component';

// Modules

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
