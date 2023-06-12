import { type IBaseEntity } from './IBaseEntity';
import { type IBaseType } from './IBaseType';

export interface IVisitation extends IBaseEntity {
	user_id: string;
	workspace_id: string;
	tariff_id: string;
	status: IBaseType;
	start_date: string;
	end_date: string;
	total_cost: number;
}

export interface IVIsitationCreation {
	user_id: string;
	workspace_id: string;
	start_date: string;
	end_date: string;
	total_cost: number;
	tariff_id: string;
}
