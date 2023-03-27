import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Services
import { TokenService } from '@services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.tokenService.hasToken()) {
      this.router.navigate(['/trello']);
    }
    return true;
  }
  
}
