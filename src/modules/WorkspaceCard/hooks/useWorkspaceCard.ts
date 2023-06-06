import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { AppRoutes } from '../../../router/routes';

export const useWorkspaceCard = (workspaceId: string) => {
	const navigate = useNavigate();

	const navigateToWorkspacePage = useCallback(
		() => navigate(`${AppRoutes.WORKSPACES}/${workspaceId}`),
		[workspaceId, navigate]);

	const navigateToWorkspaceExecutionPage = useCallback(
		() => navigate(`${AppRoutes.WORKSPACES}/${workspaceId}/execution`),
		[workspaceId, navigate]);

	return {
		navigateToWorkspacePage,
		navigateToWorkspaceExecutionPage,
	};
};
