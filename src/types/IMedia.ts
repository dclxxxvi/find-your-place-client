import { type IBaseEntity } from './IBaseEntity';

export interface IMedia extends IBaseEntity {
	workspace_id: string;
	media_id: string;
	link: string;
}

export interface IImageMedia {
	id: string;
	media: IMedia;
}
