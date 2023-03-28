import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { checkToken } from '@interceptors/token.interceptor';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/users`

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}`, { context: checkToken() });
  }

}
