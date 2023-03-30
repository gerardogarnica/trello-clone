import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDown, faBell, faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Colors, NAVBAR_BACKGROUND_COLORS } from '@models/colors.model';
import { AuthService } from '@services/auth/auth.service';
import { BoardsService } from '@services/boards/boards.service';

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
  isOpenOverlayCreate = false;
  navbarBackgroundColor: Colors = 'sky';
  navbarColors = NAVBAR_BACKGROUND_COLORS;

  user$ = this.authService.user$;

  constructor(
    private router: Router,
    private authService: AuthService,
    private boardsService: BoardsService
  ) {
    this.boardsService.boardBackgroundColor$
      .subscribe(color => {
        this.navbarBackgroundColor = color;
      });
  }

  doLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  doCloseOverlayCreate(event: boolean) {
    this.isOpenOverlayCreate = event;
  }

  get colors() {
    const classes = this.navbarColors[this.navbarBackgroundColor];
    return classes ? classes : {};
  }
}
