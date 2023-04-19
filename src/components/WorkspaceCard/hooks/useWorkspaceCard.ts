import { useNavigate } from 'react-router-dom';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { useCallback } from 'react';
import { AppRoutes } from '../../../router/routes';

export const useWorkspaceCard = (workspaceId: string, vertical?: boolean) => {
	const navigate = useNavigate();
	const breakpoint = useBreakpoint(true);

	const isVertical = vertical || !breakpoint.md;

	const navigateToWorkspacePage = useCallback(
		() => navigate(`/${AppRoutes.WORKSPACES}/${workspaceId}`),
		[workspaceId, navigate]);

	return {
		navigateToWorkspacePage,
		isVertical,
	};
};
