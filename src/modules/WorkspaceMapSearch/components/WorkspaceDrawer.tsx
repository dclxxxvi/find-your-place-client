import * as React from 'react';
import { Drawer } from 'antd';
import Title from 'antd/es/typography/Title';
import { workspacesMocks } from '../WorkspaceMapSearch';

interface Props {
	open: boolean;
	onClose: () => void;
	workspaceId?: string;
}

const WorkspaceDrawer: React.FC<Props> = ({ open, onClose, workspaceId }) => {
	const workspace = workspacesMocks.find(ws => ws.id === workspaceId);

	return (
		<Drawer
			title={workspace?.name}
			placement={'left'}
			closable={false}
			onClose={onClose}
			open={open}
		>
			<Title>Выбран коворкинг под номером {workspace?.id}</Title>
		</Drawer>
	);
};

export default React.memo(WorkspaceDrawer);
