import { type IBaseEntity } from './IBaseEntity';
import { type IUser } from './IUser';
import { type IWorkspace } from './IWorkspace';
import { type IBaseType } from './IBaseType';

export interface IVisitation extends IBaseEntity {
	user: IUser;
	workspace: IWorkspace;
	status: IBaseType;
	start_date: string;
	end_date: string;
}

export interface IVIsitationCreation {
	user_id: string;
	workspace_id: string;
	start_date: string;
	end_date: string;
}
