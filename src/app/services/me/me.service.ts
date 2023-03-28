import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { checkToken } from '@interceptors/token.interceptor';
import { Board } from '@models/board.model';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/me`

  constructor(
    private http: HttpClient
  ) { }

  getMeProfile() {
    return this.http.get<User>(`${this.apiUrl}/profile`, { context: checkToken() });
  }

  getMeBoards() {
    return this.http.get<Board[]>(`${this.apiUrl}/boards`, { context: checkToken() });
  }
}
