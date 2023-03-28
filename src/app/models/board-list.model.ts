import { BoardTask } from "./board-task.model";
import { Card } from "./card.model";

export interface BoardList {
    id: string;
    title: string;
    position: number;
    cards: Card[];
    items: BoardTask[];
}