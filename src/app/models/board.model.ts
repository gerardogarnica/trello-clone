import { BoardList } from '@models/board-list.model';
import { Card } from '@models/card.model';
import { Colors } from '@models/colors.model';
import { User } from "@models/user.model";

export interface Board {
    id: number;
    title: string;
    backgroundColor: Colors;
    members: User[];
    lists: BoardList[];
    cards: Card[];
}

export interface CreateBoardDto {
    title: string;
    backgroundColor: Colors;
}