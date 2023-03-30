import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

import { Board } from '@models/board.model';
import { BoardList } from '@models/board-list.model';
import { Card } from '@models/card.model';
import { BoardsService } from '@services/boards/boards.service';
import { CardsService } from '@services/cards/cards.service';
import { ListsService } from '@services/lists/lists.service';

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
  formNewCard = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]]
  });
  formNewList = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]]
  });
  board: Board | null = null;
  showNewListForm = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: Dialog,
    private activatedRoute: ActivatedRoute,
    private boardsService: BoardsService,
    private cardsService: CardsService,
    private listsService: ListsService
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

  private updateCardInfo(card: Card, listId: string, newPosition: number) {
    this.cardsService.update(card.id, { listId: listId, position: newPosition })
      .subscribe((cardUpdated) => {
        console.log(cardUpdated);
      });
  }

  openNewCardForm(list: BoardList) {
    this.board?.lists.forEach(list => list.showNewCardForm = false);
    list.showNewCardForm = true;
    this.showNewListForm = false;
  }

  closeNewCardForm(list: BoardList) {
    list.showNewCardForm = false;
  }

  doCreateCard(event: Event, list: BoardList) {
    event.preventDefault();
    if (this.formNewCard.invalid) {
      this.formNewCard.markAllAsTouched();
      return;
    }

    const { title } = this.formNewCard.getRawValue();
    this.cardsService
      .create({
        title: title,
        listId: list.id,
        boardId: this.board?.id,
        position: this.boardsService.getNewCardPosition(list.cards)
      })
      .subscribe((card) => {
        list.cards.push(card);
        list.showNewCardForm = false;
        this.formNewCard.reset();
      });
  }

  openNewListForm() {
    this.showNewListForm = true;
    this.board?.lists.forEach(list => list.showNewCardForm = false);
  }

  doCreateList(event: Event) {
    event.preventDefault();
    if (this.formNewList.invalid) {
      this.formNewList.markAllAsTouched();
      return;
    }

    const { title } = this.formNewList.getRawValue();

    this.listsService
      .create({
        title: title,
        boardId: this.board?.id,
        position: (this.board?.lists?.length ?? 0) + 1
      })
      .subscribe((list) => {
        this.board?.lists.push({
          ...list,
          cards: []
        });
        this.showNewListForm = false;
        this.formNewList.reset();
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
