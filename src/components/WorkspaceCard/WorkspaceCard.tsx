import * as React from 'react';
import { Card, Col, Image, Row } from 'antd';
import { type IWorkspace } from '../../types';
import Title from 'antd/es/typography/Title';

interface Props {
	workspace: IWorkspace;
}

const WorkspaceCard: React.FC<Props> = ({ workspace }) => {
	return (
		<Card>
			<Row>
				<Col span={12}>
					<Image placeholder={'Картинка'}/>
				</Col>
				<Col span={12}>
					<Row>
						<Col>
							<Title style={{ margin: 0 }} level={5}>{workspace.title}</Title>
						</Col>
						<Col>
							{workspace.rating}
						</Col>
					</Row>
					<Row>
						{workspace.description}
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default React.memo(WorkspaceCard);
