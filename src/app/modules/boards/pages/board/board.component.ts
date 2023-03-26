import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

import { BoardColumn } from '@models/board-colum.model';
import { BoardTask } from '@models/board-task.model';

import { TaskDialogComponent } from '../../components/task-dialog/task-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {
  columns: BoardColumn[] = [
    {
      title: 'To Do',
      items: [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' }
      ]
    },
    {
      title: 'Doing',
      items: [
        { id: '1', title: 'Item 4' },
        { id: '2', title: 'Item 5' },
        { id: '3', title: 'Item 6' }
      ]
    },
    {
      title: 'Done',
      items: [
        { id: '1', title: 'Item 7' },
        { id: '2', title: 'Item 8' },
        { id: '3', title: 'Item 9' }
      ]
    }
  ]

  todos: BoardTask[] = [];
  doings: BoardTask[] = [];
  dones: BoardTask[] = [];

  constructor(private dialog: Dialog) {}

  drop(event: CdkDragDrop<BoardTask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      items: []
    });
  }

  openDialog(task: BoardTask) {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '50%',
      autoFocus: false,
      data: {
        task: task
      }
    });

    dialogRef.closed.subscribe(result => {
      console.log(result);
    });
  }
}
