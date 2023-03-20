import { BoardTask } from "./board-task.model";

export interface BoardColumn {
    title: string;
    items: BoardTask[];
}