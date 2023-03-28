import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { AuthResponse } from '@models/auth.model';
import { User } from '@models/user.model';
import { MeService } from '@services/me/me.service';
import { TokenService } from '@services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/auth`
  user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private meService: MeService,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          this.tokenService.setToken(response.access_token);
          this.tokenService.setRefreshToken(response.refresh_token);
        })
      );
  }

  register(email: string, name: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, { email, name, password });
  }

  registerAndLogin(email: string, name: string, password: string) {
    return this.register(email, name, password)
      .pipe(
        switchMap(() => this.login(email, password))
      );
  }

  isAvailable(email: string) {
    return this.http.post<{ isAvailable: boolean }>(`${this.apiUrl}/is-available`, { email });
  }

  recoveryPassword(email: string) {
    return this.http.post<{ link: string, recoveryToken: string }>(`${this.apiUrl}/recovery`, { email });
  }

  changePassword(token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/change-password`, { token, newPassword });
  }

  refreshToken() {
    const refreshToken = this.tokenService.getRefreshToken();
    return this.http.post<AuthResponse>(`${this.apiUrl}/refresh-token`, { refreshToken })
      .pipe(
        tap(response => {
          this.tokenService.setToken(response.access_token);
          this.tokenService.setRefreshToken(response.refresh_token);
        })
      );
  }

  getProfile() {
    return this.meService.getMeProfile()
      .pipe(
        tap(user => {
          this.user$.next(user);
        })
      );
  }

  logout() {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }
}
