import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersTableComponent } from './pages/users-table/users-table.component';

const routes: Routes = [
  {
    path: '',
    component: UsersTableComponent,
    title: 'Users'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
