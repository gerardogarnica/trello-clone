import { Colors } from '@models/colors.model';
import { User } from "@models/user.model";

export interface Board {
    id: number;
    title: string;
    backgroundColor: Colors;
    members: User[];
}