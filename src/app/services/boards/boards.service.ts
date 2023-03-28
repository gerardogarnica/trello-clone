import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { checkToken } from '@interceptors/token.interceptor';
import { Board } from '@models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/boards`

  constructor(
    private http: HttpClient
  ) { }

  getAllBoards() {
    return this.http.get<Board[]>(this.apiUrl, { context: checkToken() });
  }

  getBoard(id: Board['id']) {
    return this.http.get<Board>(`${this.apiUrl}/${id}`, { context: checkToken() });
  }
}
