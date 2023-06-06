import * as React from 'react';
import { Col, Row, Card } from 'antd';
import Typography from 'antd/es/typography';
import { type IWorkspace } from '../../../types';
import useWorkspaceCard from '../hooks';
import ImageCarousel from '../components/ImageCarousel';
import StatusViewer from './components/StatusViewer';
import Address from '../components/Address';

interface Props {
	workspace: IWorkspace;
}

const SuggestedWorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace.id);

	return (
		<Card
			style={{ cursor: 'pointer' }}
			size={'small'}
			onClick={navigateToWorkspacePage}
		>
			<Row gutter={[24, 16]}>
				<Col span={24}>
					<ImageCarousel showOne images={workspace.images} />
				</Col>
				<Col span={24} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
					<Row gutter={16}>
						<Col span={14} xs={20} md={18}>
							<Row align={'top'} justify={'space-between'}>
								<Col>
									<Typography.Title
										style={{ margin: 0 }}
										level={3}
									>{workspace.title}
									</Typography.Title>
								</Col>
							</Row>
							<Row>
								<Col>
									<Typography.Title level={5}>
										Описание
									</Typography.Title>
								</Col>
								<Col>
									<Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '0' }}>
										{workspace.description}
									</Typography.Paragraph>
								</Col>
							</Row>
							<Row>
								<Col>
									<Typography.Title level={5}>
										Адрес
									</Typography.Title>
								</Col>
								<Col>
									<Address locationValue={workspace.location_value}/>
								</Col>
							</Row>
						</Col>
						<Col span={10} xs={4} md={6}>
							<StatusViewer status={workspace.status} />
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default SuggestedWorkspaceCardDesktop;
