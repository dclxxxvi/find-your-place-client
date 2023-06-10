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

const SuggestedWorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage, navigateToWorkspaceEditPage } = useWorkspaceCard(workspace.id);

	return (
		<Card
			style={{ cursor: 'pointer' }}
			size={'small'}
		>
			<Row gutter={[24, 16]}>
				<Col span={12} lg={12} xl={10}>
					<ImageCarousel showOne images={workspace.images} />
				</Col>
				<Col span={12} lg={12} xl={14} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
					<Row gutter={24} justify='space-between'>
						<Col span={14} xl={14} xxl={15}>
							<Row align={'top'} justify={'space-between'}>
								<Col span={24}>
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
								<Col span={24}>
									<Typography.Title level={5}>
										Описание
									</Typography.Title>
								</Col>
								<Col span={24}>
									<Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '0' }}>
										{workspace.description}
									</Typography.Paragraph>
								</Col>
							</Row>
						</Col>
						<Col span={10} xl={10} xxl={9}>
							<Row justify='end'>
								<StatusViewer status={workspace.status} />
							</Row>
						</Col>
					</Row>
					<Row>
						<Col span={24} onClick={navigateToWorkspacePage}>
							<Address locationValue={workspace.location_value}/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default SuggestedWorkspaceCardDesktop;
