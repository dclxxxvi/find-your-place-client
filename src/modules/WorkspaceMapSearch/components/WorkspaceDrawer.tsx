import * as React from 'react';
import { Drawer } from 'antd';
import { workspaceMocks } from '../../../mocks/workspaces';
import { WorkspaceCard } from '../../../components';

interface Props {
	open: boolean;
	onClose: () => void;
	workspaceId?: string;
}

const WorkspaceDrawer: React.FC<Props> = ({ open, onClose, workspaceId }) => {
	const workspace = workspaceMocks.find(ws => ws.id === workspaceId);

	return (
		<Drawer
			title={workspace?.title}
			placement={'left'}
			onClose={onClose}
			open={open}
			closable={false}
		>
			{ (workspace != null) && <WorkspaceCard workspace={ workspace } vertical /> }
		</Drawer>
	);
};

export default React.memo(WorkspaceDrawer);
