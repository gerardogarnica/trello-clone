import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';

import { Card } from '@models/card.model';

interface InputDialogData {
  task: Card;
}

interface OutputDialogData {
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

  card: Card;

  constructor(
    private dialogRef: DialogRef<OutputDialogData>,
    @Inject(DIALOG_DATA) data: InputDialogData) {
    this.card = data.task;
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
