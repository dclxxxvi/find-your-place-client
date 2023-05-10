import * as React from 'react';
import { Drawer } from 'antd';
import { workspaceMocks } from '../../../mocks/workspaces';
import { WorkspaceCardMobile } from '../../WorkspaceCard/WorkspaceCard';

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
			width={'100%'}
			contentWrapperStyle={{ maxWidth: 378 }}
		>
			{ (workspace != null) && <WorkspaceCardMobile workspace={ workspace } /> }
		</Drawer>
	);
};

export default React.memo(WorkspaceDrawer);
