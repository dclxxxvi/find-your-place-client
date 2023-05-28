import * as React from 'react';
import { Button, Card, Col, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import { AimOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { type IWorkspace } from '../../../types';
import useWorkspaceCard from '../hooks';
import Parameters from './components/Parameters';
import RatingField from '../components/RatingField';
import ImageCarousel from '../components/ImageCarousel';

interface Props {
	workspace: IWorkspace;
}

const WorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const [isCardHovered, setIsCardHovered] = useState(false);
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace.id);

	return (
		<Card
			style={{
				cursor: 'pointer',
				boxShadow: isCardHovered ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : undefined,
			}}
			size={'small'}
			onMouseEnter={() => setIsCardHovered(true)}
			onMouseLeave={() => setIsCardHovered(false)}
		>
			<Row gutter={[24, 16]} align={'middle'} justify={'center'} >
				<Col span={10}>
					<ImageCarousel images={workspace.images} />
				</Col>
				<Col span={14}>
					<Space direction={'vertical'} size={isCardHovered ? 'small' : 'large'} style={{ width: '100%' }}>
						<Row justify={'space-between'}>
							<Col>
								<Typography.Title
									onClick={navigateToWorkspacePage}
									style={{ margin: 0 }}
									level={4}
								>{workspace.title}
								</Typography.Title>
							</Col>
							<Col>
								<RatingField rating={workspace.rating} commentsCount={workspace.comments.length}/>
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
							{ isCardHovered && <Parameters parameters={workspace.parameters} /> }
						</Row>
						<Row gutter={8}>
							<Col span={24}>
								<Space>
									<AimOutlined/>
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
						{ isCardHovered &&
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
						}
					</Space>
				</Col>
			</Row>
		</Card>
	);
};

export default WorkspaceCardDesktop;
