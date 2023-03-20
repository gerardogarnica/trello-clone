import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';

import { BoardTask } from '../../models/board-task.model';

interface DialogInputData {
  task: BoardTask;
}

interface DialogOutputData {
  response: boolean;
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html'
})
export class TaskDialogComponent {
  faBars = faBars;
  faCheckSquare = faCheckSquare;
  faCheckToSlot = faCheckToSlot;
  faClock = faClock;
  faClose = faClose;
  faTag = faTag;
  faUser = faUser;

  task: BoardTask;

  constructor(
    private dialogRef: DialogRef<DialogOutputData>,
    @Inject(DIALOG_DATA) data: DialogInputData
    ) { 
      this.task = data.task;
    }

    close() {
      this.dialogRef.close();
    }
  
    closeWithResponse(response: boolean) {
      this.dialogRef.close({
        response: response
      });
    }
  
  }
