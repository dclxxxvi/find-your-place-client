import * as React from 'react';
import { Button, Card, Col, Divider, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import useWorkspaceCard from '../hooks';
import { type IWorkspace } from '../../../types';
import Parameters from './components/Parameters';
import RatingField from '../components/RatingField';
import ImageCarousel from '../components/ImageCarousel';

interface Props {
	workspace: IWorkspace;
}

const WorkspaceCardMobile: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace.id);

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
							<Parameters parameters={workspace.parameters} />
							<Divider style={{ margin: '5px 0 ' }}/>
						</Row>
						<Row gutter={8}>
							<Col span={24}>
								<Space align='center'>
									<span className="material-symbols-outlined" style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									location_on
									</span>
									<Typography.Text>
										{workspace.location_value}
									</Typography.Text>
								</Space>
							</Col>
							{/* {/!* <Col span={24}> *!/}
							{/!*	<Row gutter={12}> *!/}
							{/!*		<Col> *!/}
							{/!*			<AimOutlined /> *!/}
							{/!*		</Col> *!/}
							{/!*		<Col> *!/}
							{/!*			<Typography.Text> *!/}
							{/!*				Чкаловская *!/}
							{/!*			</Typography.Text> *!/}
							{/!*		</Col> *!/}
							{/!*	</Row> *!/}
							{/!* </Col> *!/} */}
						</Row>
						<Row>
							<Typography.Title level={5} style={{ width: '100%', margin: '5px 0' }}>
								300 руб/час или 5000 руб/месяц
							</Typography.Title>
						</Row>
						<Row>
							<Col flex={'auto'}>
								<Button
									style={{ width: '100%', marginTop: '10px' }}
									type={'primary'}
									size={'large'}
									onClick={navigateToWorkspacePage}>
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
