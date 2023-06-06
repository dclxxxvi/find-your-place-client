import { type SearchFilterState } from '../redux';
import { type IPaginationParams } from './IPaginationParams';

interface IWorkspaceSearchParams extends SearchFilterState {

}

export type IWorkspaceParams = IWorkspaceSearchParams & IPaginationParams;
