import { type IBaseEntity } from './IBaseEntity';

export interface ITransaction extends IBaseEntity {
	amount: number;
	description: string;
}
