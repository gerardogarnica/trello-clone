import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp, faBorderAll, faBox, faClock, faGear, faHeart, faUsers, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

import { Board } from '@models/board.model';
import { MeService } from '@services/me/me.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faBorderAll = faBorderAll;
  faBox = faBox;
  faClock = faClock;
  faGear = faGear;
  faHeart = faHeart;
  faUsers = faUsers;
  faWaveSquare = faWaveSquare;
  faTrello = faTrello;

  boards: Board[] = [];

  constructor(
    private meService: MeService
  ) { }

  ngOnInit() {
    this.getMeBoards();
  }

  getMeBoards() {
    this.meService.getMeBoards()
      .subscribe(boards => {
        this.boards = boards;
      });
  }
}
