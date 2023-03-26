import { type IBaseType } from './IBaseType';

export interface IWorkspaceSearchParams {
	search?: string;
	format?: IBaseType;
	cost?: IBaseType;
	params?: IBaseType[];
}
