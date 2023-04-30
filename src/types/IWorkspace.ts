import { type IBaseEntity } from './IBaseEntity';
import { type IAddress } from './IAddress';
import { type IImageMedia } from './IImageMedia';

export interface IWorkspace extends IBaseEntity, IAddress {
	title: string;
	description: string;
	phone_number: string;
	site_url: string;
	rating: number;
	feedback_count: number;
	approved: boolean;
	images: IImageMedia[];
}
