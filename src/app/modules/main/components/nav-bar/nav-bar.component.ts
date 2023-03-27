import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDown, faBell, faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '@services/auth/auth.service';

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

  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  doLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
