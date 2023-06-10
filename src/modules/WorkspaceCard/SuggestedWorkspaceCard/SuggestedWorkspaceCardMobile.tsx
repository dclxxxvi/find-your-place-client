import * as React from 'react';
import { Col, Row, Card, Space, Button } from 'antd';
import Typography from 'antd/es/typography';
import { type IWorkspace } from '../../../types';
import useWorkspaceCard from '../hooks';
import ImageCarousel from '../components/ImageCarousel';
import StatusViewer from './components/StatusViewer';
import Address from '../components/Address';
import { EditOutlined } from '@ant-design/icons';

interface Props {
	workspace: IWorkspace;
}

const SuggestedWorkspaceCardMobile: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage, navigateToWorkspaceEditPage } = useWorkspaceCard(workspace.id);

	return (
		<Card
			style={{ cursor: 'pointer' }}
			size={'small'}
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
					<Row gutter={16} justify='space-between'>
						<Col span={14} xs={20} md={15}>
							<Row align={'top'} justify={'space-between'}>
								<Col>
									<Space size={'middle'}>
										<Typography.Title
											style={{ margin: 0 }}
											level={3}
											onClick={navigateToWorkspacePage}
										>{workspace.title}
										</Typography.Title>
										<Button
											shape={'circle'}
											onClick={navigateToWorkspaceEditPage}
											type={'text'}
											icon={<EditOutlined size={40}/>}
										/>
									</Space>
								</Col>
							</Row>
							<Row onClick={navigateToWorkspacePage}>
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
						</Col>
						<Col span={10} xs={4} sm={2} md={9}>
							<StatusViewer status={workspace.status} />
						</Col>
					</Row>
					<Row>
						<Col onClick={navigateToWorkspacePage}>
							<Address locationValue={workspace.location_value}/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default SuggestedWorkspaceCardMobile;
