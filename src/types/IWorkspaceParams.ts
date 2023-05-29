import { type IBaseType } from './IBaseType';

interface IWorkspaceSearchParams {
	search?: string;
	format?: IBaseType;
	cost?: IBaseType;
	params?: IBaseType[];
	rooms?: string;
	additional?: string;
	features?: string;
}

interface IWorkspacePaginationParams {
	page?: number;
	size?: number;
}

export type IWorkspaceParams = IWorkspaceSearchParams & IWorkspacePaginationParams;
