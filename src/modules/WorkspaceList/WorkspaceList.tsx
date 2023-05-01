import * as React from 'react';
import { Col, Row } from 'antd';
import { workspaceMocks } from '../../mocks/workspaces';
import WorkspaceCard from '../WorkspaceCard/WorkspaceCard';

const WorkspaceList: React.FC = () => {
	return (
		<Row gutter={[0, 24]}>
			{workspaceMocks.map(ws => {
				return (
					<Col span={24} key={ws.id}>
						<WorkspaceCard workspace={ws}/>
					</Col>
				);
			})}
		</Row>
	);
};

export default WorkspaceList;
