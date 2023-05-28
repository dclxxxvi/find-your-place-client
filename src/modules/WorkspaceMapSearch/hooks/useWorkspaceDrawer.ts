import { useCallback, useState } from 'react';

interface useWorkspaceDrawerReturn {
	workspaceId?: string;
	open: boolean;
	openWorkspaceDrawer: (newWorkspaceId: string) => void;
	closeWorkspaceDrawer: () => void;
}

export const useWorkspaceDrawer = (): useWorkspaceDrawerReturn => {
	const [open, setOpen] = useState(false);

	const showDrawer = useCallback(() => setOpen(true), []);
	const closeDrawer = useCallback(() => setOpen(false), []);

	const [workspaceId, setWorkspaceId] = useState<string | undefined>(undefined);

	const openWorkspaceDrawer = useCallback((newWorkspaceId: string) => {
		setWorkspaceId(newWorkspaceId);
		showDrawer();
	}, [showDrawer]);

	return {
		workspaceId,
		open,
		openWorkspaceDrawer,
		closeWorkspaceDrawer: closeDrawer,
	};
};
