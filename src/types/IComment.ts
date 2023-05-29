import { type IBaseEntity } from './IBaseEntity';
import { type IUser } from './IUser';
import { type IWorkspace } from './IWorkspace';

export interface IComment extends IBaseEntity {
	rating: number;
	text: string;
	advantages: string;
	disadvantages: string;
	user: IUser;
	workspace: IWorkspace;
}
