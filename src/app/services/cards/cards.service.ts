import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { checkToken } from '@interceptors/token.interceptor';
import { Card, CreateCardDto, UpdateCardDto } from '@models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/cards`

  constructor(
    private http: HttpClient
  ) { }

  create(createCardDto: CreateCardDto) {
    return this.http.post<Card>(`${this.apiUrl}`, createCardDto, { context: checkToken() });
  }

  update(id: Card['id'], updateCardDto: UpdateCardDto) {
    return this.http.put<Card>(`${this.apiUrl}/${id}`, updateCardDto, { context: checkToken() });
  }
}
