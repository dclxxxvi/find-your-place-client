import * as React from 'react';
import { Button, Card, Carousel, Col, Divider, Image, Rate, Row, Space } from 'antd';
import { type IWorkspace } from '../../types';
import Typography from 'antd/es/typography';
import { AimOutlined } from '@ant-design/icons';
import { useWorkspaceCard } from './hooks/useWorkspaceCard';
import { useState } from 'react';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

interface Props {
	workspace: IWorkspace;
	vertical?: boolean;
}

const WorkspaceCard: React.FC<Props> = ({ workspace, vertical }) => {
	const breakpoint = useBreakpoint(true);

	const isMobile = !breakpoint.md;
	const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
	const { isVertical, navigateToWorkspacePage } = useWorkspaceCard(workspace.id, vertical);

	return (
		<Card size={'small'} style={{ cursor: 'pointer' }} onMouseEnter={() => setIsCardHovered(true)}
			onMouseLeave={() => setIsCardHovered(false)}
		>
			<Row gutter={[24, 16]} align={'middle'} justify={'center'} >

				<Col xxl={isVertical ? 14 : 10} md={12} sm={24} span={isVertical ? 24 : 10}>
					<Carousel autoplay>
						{workspace.images.map((image) =>
							<Image key={image} src={image} width={'100%'} height={'100%'}/>,
						)}
					</Carousel>
				</Col>

				<Col xxl={14} md={12} sm={24} span={isVertical ? 24 : 14} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
				}}>
					<Space direction={'vertical'} size={(isCardHovered || isMobile) ? 'small' : 'large'}>

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
								<Row>
									<Rate allowHalf defaultValue={workspace.rating} disabled></Rate>
								</Row>
								<Row justify={'end'}>
									<Typography.Text type="secondary">
										{`${workspace.feedback_count as number} отзывов`}
									</Typography.Text>
								</Row>
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
						{
							(isCardHovered || isMobile) &&

							<Row>
								<Divider style={{ margin: '5px 0 ' }}/>
								<Col span={12}><Space><AimOutlined/><Typography.Text>
									Супер Плюсы
								</Typography.Text></Space></Col>
								<Col span={12}><Space><AimOutlined/><Typography.Text>
									Супер Плюсы
								</Typography.Text></Space></Col>
								<Col span={12}><Space><AimOutlined/><Typography.Text>
									Супер Плюсы
								</Typography.Text></Space></Col>
								<Col span={12}><Space><AimOutlined/><Typography.Text>
									Супер Плюсы
								</Typography.Text></Space></Col>
								<Divider style={{ margin: '5px 0 ' }}/>
							</Row>

						}
						<Row gutter={8}>
							<Col span={24}>
								<Space>
									<AimOutlined/>
									<Typography.Text>
										{workspace.address.value}
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

						{

							(isCardHovered || isMobile) &&
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

export default React.memo(WorkspaceCard);
