import { type BaseEntity } from './baseEntity';

export interface BaseType extends BaseEntity {
	category_id: string;
	code: string;
	name: string;
	icon_link: string;
	sort_order: string;
	number_value: string;
}
