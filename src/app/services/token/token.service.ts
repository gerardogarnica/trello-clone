import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

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

  isValidToken(): boolean {
    const currentToken = this.getToken();
    if (!currentToken) {
      return false;
    }

    const decodedToken = jwt_decode<JwtPayload>(currentToken);
    if (decodedToken && decodedToken?.exp) {
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      return expirationDate.getTime() > new Date().getTime();
    }

    return false;
  }
}
