import { useGetStatusesQuery } from '../redux/api/service.api';
import { useMemo } from 'react';
import { type IBaseType } from '../types';

interface UseStatusesReturn {
	workspaceStatuses: IBaseType[];
	visitStatuses: IBaseType[];
	isLoading: boolean;
}

enum ETags {
	WORKSPACE = 'workspace_status',
	VISIT = 'visit_status',
}

export const useStatuses = (): UseStatusesReturn => {
	const { data, isLoading } = useGetStatusesQuery(null);

	const workspaceStatuses = useMemo(() => {
		return data?.filter(status => status.tag === ETags.WORKSPACE) ?? [];
	}, [data]);

	const visitStatuses = useMemo(() => {
		return data?.filter(status => status.tag === ETags.VISIT) ?? [];
	}, [data]);

	return {
		workspaceStatuses,
		visitStatuses,
		isLoading,
	};
};
