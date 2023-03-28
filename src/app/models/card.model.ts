import { BoardList } from "@models/board-list.model";

export interface Card {
    id: string;
    title: string;
    description: string;
    position: number;
    list: BoardList;
}

export interface UpdateCardDto {
    title?: string;
    description?: string;
    position?: number;
    listId?: string;
    boardId?: string;
}