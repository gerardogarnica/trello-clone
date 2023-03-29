import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Colors } from '@models/colors.model';
import { RequestStatus } from '@models/request-status.model';
import { BoardsService } from '@services/boards/boards.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html'
})
export class BoardFormComponent {
  @Output() closeOverlay = new EventEmitter<boolean>();

  form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    backgroundColor: new FormControl<Colors>('sky',
      {
        nonNullable: true,
        validators: [Validators.required]
      })
  });
  status: RequestStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private boardsService: BoardsService
  ) { }

  doSave(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';

    const { title, backgroundColor } = this.form.getRawValue();
    this.boardsService
      .create({ title, backgroundColor })
      .subscribe({
        next: (board => {
          this.status = 'success';
          this.closeOverlay.next(false);
          this.router.navigate(['/trello/boards', board.id]);
        }),
        error: () => {
          this.status = 'error';
        }
      });
  }
}
