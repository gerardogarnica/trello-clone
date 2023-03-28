import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  accessTokenKeyName = 'access-token-trello';
  refreshTokenKeyName = 'refresh-token-trello';

  setToken(token: string) {
    setCookie(this.accessTokenKeyName, token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie(this.accessTokenKeyName);
    return token;
  }

  removeToken() {
    removeCookie(this.accessTokenKeyName);
  }

  setRefreshToken(token: string) {
    setCookie(this.refreshTokenKeyName, token, { expires: 365, path: '/' });
  }

  getRefreshToken() {
    const token = getCookie(this.refreshTokenKeyName);
    return token;
  }

  removeRefreshToken() {
    removeCookie(this.refreshTokenKeyName);
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

  isValidRefreshToken(): boolean {
    const currentToken = this.getRefreshToken();
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
