import { type IBaseEntity } from './IBaseEntity';

export interface IUser extends IBaseEntity {
	email: string;
	username: string;
	password: string;
	first_name: string;
	last_name: string;
	phone: string;
	bonus_balance: number;
}
