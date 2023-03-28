import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { AuthService } from '@services/auth/auth.service';
import { TokenService } from '@services/token/token.service';

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(CHECK_TOKEN)) {
      if (this.tokenService.isValidToken()) {
        return this.addToken(request, next);
      }

      return this.updateTokens(request, next);
    }

    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();

    if (accessToken) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }

  private updateTokens(request: HttpRequest<unknown>, next: HttpHandler) {
    const refreshToken = this.tokenService.getRefreshToken();

    if (refreshToken && this.tokenService.isValidRefreshToken()) {
      return this.authService.refreshToken()
        .pipe(
          switchMap(() => this.addToken(request, next))
        )
    }

    return next.handle(request);
  }
}
