import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@models/user.model';
import { TokenService } from '@services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/users`

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}`, {
      headers: {
        Authorization: `Bearer ${this.tokenService.getToken()}`
      }
    });
  }

}
