import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { checkToken } from '@interceptors/token.interceptor';
import { Board, CreateBoardDto } from '@models/board.model';
import { BoardList } from '@models/board-list.model';
import { Card } from '@models/card.model';
import { Colors } from '@models/colors.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  apiUrl = `https://fake-trello-api.herokuapp.com/api/v1/boards`
  cardBufferSpace = 65535;
  boardBackgroundColor$ = new BehaviorSubject<Colors>('sky');

  constructor(
    private http: HttpClient
  ) { }

  getAllBoards() {
    return this.http.get<Board[]>(this.apiUrl, { context: checkToken() });
  }

  getBoard(id: Board['id']) {
    return this.http.get<Board>(`${this.apiUrl}/${id}`, { context: checkToken() });
  }

  getPosition(cards: Card[], currentIndex: number): number {
    const lastIndex = cards.length - 1;

    if (cards.length === 1) {
      // Is new card in the list
      return this.cardBufferSpace;
    }

    if (cards.length > 1 && currentIndex === 0) {
      // Is new card at the top of the list
      return cards[currentIndex + 1].position / 2;
    }

    if (cards.length > 1 && currentIndex === lastIndex) {
      // Is new card at the bottom of the list
      return cards[currentIndex - 1].position + this.cardBufferSpace;
    }

    if (cards.length > 2 && currentIndex > 0 && currentIndex < lastIndex) {
      // Is new card in the middle of the list
      return (cards[currentIndex - 1].position + cards[currentIndex + 1].position) / 2;
    }

    return 0;
  }

  getNewCardPosition(elements: Card[] | BoardList[]): number {
    if (elements.length === 0) {
      return this.cardBufferSpace;
    }

    return elements[elements.length - 1].position + this.cardBufferSpace;
  }

  create(changes: CreateBoardDto) {
    return this.http.post<Board>(`${this.apiUrl}`, changes, { context: checkToken() });
  }

  setBackgroundColor(color: Colors) {
    this.boardBackgroundColor$.next(color);
  }
}
