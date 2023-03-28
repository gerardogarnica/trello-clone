import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

import { Board } from '@models/board.model';
import { BoardTask } from '@models/board-task.model';
import { Card } from '@models/card.model';
import { BoardsService } from '@services/boards/boards.service';
import { CardsService } from '@services/cards/cards.service';

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
export class BoardComponent implements OnInit {
  board: Board | null = null;

  todos: BoardTask[] = [];
  doings: BoardTask[] = [];
  dones: BoardTask[] = [];

  constructor(
    private dialog: Dialog,
    private activatedRoute: ActivatedRoute,
    private boardsService: BoardsService,
    private cardsService: CardsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const boardId = params.get('boardId');

      if (boardId) {
        this.getBoard(parseInt(boardId) ?? undefined);
      }
    });
  }

  private getBoard(boardId: Board['id']) {
    this.boardsService.getBoard(boardId)
      .subscribe(board => {
        this.board = board;
      });
  }

  drop(event: CdkDragDrop<Card[]>) {
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

    const card = event.container.data[event.currentIndex];
    const listId = event.container.id;
    const newPosition = this.boardsService.getPosition(event.container.data, event.currentIndex);
    this.updateCardInfo(card, listId, newPosition);
  }

  addColumn() {
    /* this.columns.push({
      id: '0',
      title: 'New Column',
      position: 1,
      cards: [],
      items: []
    }); */
  }

  private updateCardInfo(card: Card, listId: string, newPosition: number) {
    this.cardsService.update(card.id, { listId: listId, position: newPosition })
      .subscribe((cardUpdated) => {
        console.log(cardUpdated);
      });
  }

  openDialog(task: Card) {
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
