import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenKeyName = 'token-trello';

  setToken(token: string) {
    setCookie(this.tokenKeyName, token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie(this.tokenKeyName);
    return token;
  }

  removeToken() {
    removeCookie(this.tokenKeyName);
  }

  hasToken(): boolean {
    const token = this.getToken();
    return token != null;
  }
}
