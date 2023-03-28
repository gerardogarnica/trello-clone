import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { checkToken } from '@interceptors/token.interceptor';
import { Card, UpdateCardDto } from '@models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/cards`

  constructor(
    private http: HttpClient
  ) { }

  update(id: Card['id'], changes: UpdateCardDto) {
    return this.http.put<Card>(`${this.apiUrl}/${id}`, changes, { context: checkToken() });
  }
}
