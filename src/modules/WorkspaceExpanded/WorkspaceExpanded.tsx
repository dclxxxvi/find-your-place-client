import * as React from 'react';
import { useParams } from 'react-router-dom';
import { workspaceMocks } from '../../mocks/workspaces';
import { Col, Row } from 'antd';
import WorkspaceAnchor from './components/WorkspaceAnchor';
import WorkspaceDescription from './components/WorkspaceDescription';
import WorkspaceServices from './components/WorkspaceServices';
import WorkspaceTariffs from './components/WorkspaceTariffs';
import WorkspaceFeedback from './components/WorkspaceFeedback';
import OverviewWorkspaceCard from '../WorkspaceCard/OverviewWorkspaceCard';

const WorkspaceExpanded: React.FC = () => {
	const { id } = useParams();
	const workspace = workspaceMocks.find(ws => ws.id === id);

	if (!workspace) {
		return null;
	}

	return (
		<Row gutter={[0, 36]}>
			<Col span={24}>
				<OverviewWorkspaceCard workspace={workspace} />
			</Col>
			<Col span={24}>
				<WorkspaceAnchor />
			</Col>
			<Col span={24}>
				<WorkspaceDescription description={workspace.description}/>
			</Col>
			<Col span={24}>
				<WorkspaceServices/>
			</Col>
			<Col span={24}>
				<WorkspaceTariffs/>
			</Col>
			<Col span={24}>
				<WorkspaceFeedback/>
			</Col>
		</Row>
	);
};

export default React.memo(WorkspaceExpanded);
