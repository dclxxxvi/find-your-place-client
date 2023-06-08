import * as React from 'react';
import { Button, Card, Col, Divider, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import useWorkspaceCard from '../hooks';
import { type IWorkspace } from '../../../types';
import Parameters from './components/Parameters';
import RatingField from '../components/RatingField';
import ImageCarousel from '../components/ImageCarousel';
import PhoneNumber from '../components/PhoneNumber';
import Address from '../components/Address';
import MinTariffLabel from '../components/MinTariffLabel';

interface Props {
	workspace: IWorkspace;
}

const WorkspaceCardMobile: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage, navigateToWorkspaceExecutionPage } = useWorkspaceCard(workspace.id);

	return (
		<Card size={'small'}>
			<Row gutter={[24, 16]} align={'middle'} justify={'center'} >
				<Col span={24}>
					<ImageCarousel images={workspace.images} />
				</Col>
				<Col span={24}>
					<Space direction={'vertical'} size={'small'}>
						<Row justify={'space-between'}>
							<Col>
								<Typography.Title
									onClick={navigateToWorkspacePage}
									style={{
										margin: 0,
										cursor: 'pointer',
									}}
									level={4}
								>{workspace.title}
								</Typography.Title>
							</Col>
							<Col>
								<RatingField rating={workspace.rating} commentsCount={workspace.comments?.length}/>
							</Col>
						</Row>
						<Divider style={{ margin: '5px 0 ' }}/>
						<Row gutter={8}>
							<Col span={24}>
								<Address locationValue={workspace.location_value}/>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<PhoneNumber phoneNumber={workspace.phone_number}/>
							</Col>
						</Row>
						<Divider style={{ margin: '5px 0 ' }}/>
						<Row>
							<Typography.Paragraph
								ellipsis={{ rows: 2 }}
								style={{ width: '100%', marginBottom: '0' }}
							>
								{workspace.description}
							</Typography.Paragraph>
						</Row>
						<Row>
							<Divider style={{ margin: '5px 0 ' }}/>
							<Parameters parameters={workspace.parameters} isOverviewCard={true}/>
							<Divider style={{ margin: '5px 0 ' }}/>
						</Row>
						<Row align={'top'} justify={'space-between'} style={{ marginTop: 16 }}>
							<Col span={24}>
								<MinTariffLabel tariffs={workspace.tariffs}/>
							</Col>
							<Col span={24} flex={'auto'}>
								<Button
									style={{ width: '100%', marginTop: '10px' }}
									type={'primary'}
									size={'large'}
									onClick={navigateToWorkspaceExecutionPage}
								>
									Перейти к оформлению
								</Button>
							</Col>
						</Row>
					</Space>
				</Col>
			</Row>
		</Card>
	);
};

export default WorkspaceCardMobile;
