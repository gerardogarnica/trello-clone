import { Component } from '@angular/core';
import { faAngleDown, faBell, faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  faAngleDown = faAngleDown;
  faBell = faBell;
  faClose = faClose;
  faInfoCircle = faInfoCircle;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
}
