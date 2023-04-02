import { type IBaseEntity } from './IBaseEntity';

export interface IUser extends IBaseEntity {
	email: string;
	name: string;
	surname: string;
	phone: string;
}
