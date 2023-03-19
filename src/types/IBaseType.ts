import { type IBaseEntity } from './IBaseEntity';

export interface IBaseType extends IBaseEntity {
	category_id: string;
	code: string;
	name: string;
	icon_link: string;
	sort_order: string;
	number_value: string;
}
