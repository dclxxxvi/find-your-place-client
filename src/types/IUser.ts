import { type IBaseEntity } from './IBaseEntity';

export interface IUser extends IBaseEntity {
	email: string;
	username: string;
	password: string;
	name: string;
	surname: string;
	phone: string;
}
