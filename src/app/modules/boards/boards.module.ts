import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { BoardsRoutingModule } from './boards-routing.module';

// Components
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';

// Pages
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    TaskDialogComponent,
    BoardComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BoardsRoutingModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class BoardsModule { }
