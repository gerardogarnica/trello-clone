import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { checkToken } from '@interceptors/token.interceptor';
import { BoardList, CreateListDto } from '@models/board-list.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/lists`

  constructor(
    private http: HttpClient
  ) { }

  create(createListDto: CreateListDto) {
    return this.http.post<BoardList>(`${this.apiUrl}`, createListDto, { context: checkToken() });
  }
}
