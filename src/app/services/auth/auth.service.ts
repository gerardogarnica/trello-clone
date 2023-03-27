import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/auth`

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
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
}
