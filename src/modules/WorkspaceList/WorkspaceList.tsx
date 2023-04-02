import * as React from 'react';
import { Col, Row } from 'antd';
import { WorkspaceCard } from '../../components/WorkspaceCard';
import { workspaceMocks } from '../../mocks/workspaces';

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
