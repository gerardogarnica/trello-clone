import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/auth`

  constructor(
    private http: HttpClient
  ) { }

  login(loginName: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { loginName, password });
  }
}
