import { type IBaseEntity } from './IBaseEntity';
import { type IAddress } from './IAddress';

export interface IWorkspace extends IBaseEntity {
	title: string;
	description: string;
	address: IAddress;
	phone_number: string;
	site_url: string;
	rating: number;
	approved: boolean;
}
