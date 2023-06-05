import { type SearchFilterState } from '../redux';

interface IWorkspaceSearchParams extends SearchFilterState {

}

interface IWorkspacePaginationParams {
	page?: number;
	size?: number;
}

export type IWorkspaceParams = IWorkspaceSearchParams & IWorkspacePaginationParams;
