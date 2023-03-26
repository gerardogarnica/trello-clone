import { Component } from '@angular/core';
import { faAngleDown, faAngleUp, faBorderAll, faBox, faClock, faGear, faHeart, faUsers, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
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

}
