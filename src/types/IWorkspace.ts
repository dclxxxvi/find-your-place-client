import { type IBaseEntity } from './IBaseEntity';
import { type IAddress } from './IAddress';
import { type IImageMedia } from './IMedia';
import { type IComment } from './IComment';
import { type IBaseType } from './IBaseType';
import { type ITariff } from './ITariff';

export interface IWorkspace extends IBaseEntity, IAddress {
	title: string;
	description: string;
	phone_number: string;
	site_url: string;
	rating: number;
	feedback_count: number;
	approved: boolean;
	images: IImageMedia[];
	comments: IComment[];
	parameters: IBaseType[];
	status: IBaseType;
	tariffs: ITariff[];
}
