import { Card } from "./card.model";

export interface BoardList {
    id: string;
    title: string;
    position: number;
    cards: Card[];
    showNewCardForm?: boolean;
}

export interface CreateListDto extends Omit<BoardList, 'id' | 'cards' | 'showNewCardForm'> {
    boardId: number | undefined;
}
