import * as React from 'react';
import { Drawer, Skeleton } from 'antd';
import { WorkspaceCardMobile } from '../../WorkspaceCard/WorkspaceCard';
import { useGetWorkspaceByIdQuery } from '../../../redux';

interface Props {
	open: boolean;
	onClose: () => void;
	workspaceId?: string;
}

const WorkspaceDrawer: React.FC<Props> = ({ open, onClose, workspaceId }) => {
	const { data, isLoading } = useGetWorkspaceByIdQuery(
		{ id: workspaceId as string },
		{ skip: !workspaceId },
	);

	const workspace = data?.data;

	if (isLoading) {
		return (
			<Drawer
				title={<Skeleton.Button active />}
				placement={'left'}
				onClose={onClose}
				open={open}
				width={'100%'}
				contentWrapperStyle={{ maxWidth: 378 }}
			>
				<Skeleton active/>
			</Drawer>
		);
	}

	if (!workspace) {
		return null;
	}

	return (
		<Drawer
			title={workspace.title}
			placement={'left'}
			onClose={onClose}
			open={open}
			width={'100%'}
			contentWrapperStyle={{ maxWidth: 378 }}
			bodyStyle={{ padding: 0 }}
		>
			<WorkspaceCardMobile workspace={ workspace }/>
		</Drawer>
	);
};

export default React.memo(WorkspaceDrawer);
