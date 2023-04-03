import * as React from 'react';
import { Col, Row, Space } from 'antd';
import { workspaceMocks } from '../../mocks/workspaces';
import { VisitationWorkspaceCard } from '../../components/WorkspaceCard';

const VisitationList: React.FC = () => {
	return (
		<Space direction={'vertical'} size={'large'}>
			<Row gutter={[0, 24]}>
				{workspaceMocks.map(ws => {
					return (
						<Col span={24} key={ws.id}>
							<VisitationWorkspaceCard workspace={ws}/>
						</Col>
					);
				})}
			</Row>
		</Space>
	);
};

export default VisitationList;
