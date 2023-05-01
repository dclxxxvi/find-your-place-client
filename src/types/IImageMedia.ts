import { type IBaseEntity } from './IBaseEntity';

export interface IImageMedia extends IBaseEntity {
	workspace_id: string;
	media_id: string;
	link: string;
}
