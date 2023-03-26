import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { UsersRoutingModule } from './users-routing.module';

// Components

// Pages
import { UsersTableComponent } from './pages/users-table/users-table.component';

// Modules

@NgModule({
  declarations: [
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ScrollingModule,
    CdkTableModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }
