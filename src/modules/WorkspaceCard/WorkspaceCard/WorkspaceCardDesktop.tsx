import * as React from 'react';
import { useState } from 'react';
import { Button, Carousel, Col, Image, Rate, Row, Space, Divider, Card } from 'antd';
import Typography from 'antd/es/typography';
import { AimOutlined } from '@ant-design/icons';
import { type IWorkspace } from '../../../types';
import useWorkspaceCard from '../hooks';

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
				boxShadow: isCardHovered ? '0px 4px 4px #8C8C8C' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
				transform: isCardHovered ? 'scale(1.025)' : 'unset',
			}}
			size={'small'}
			onMouseEnter={() => setIsCardHovered(true)}
			onMouseLeave={() => setIsCardHovered(false)}
			onClick={navigateToWorkspacePage}
		>
			<Row gutter={[24, 16]} justify={'center'}>
				<Col span={12} lg={isCardHovered ? 13 : 12} xl={isCardHovered ? 11 : 10} >
					<Carousel>
						{workspace.images.map((image) =>
							<Image
								key={ image.id }
								src={ image.link }
								height='100%'
								width='100%'
								style={{ objectFit: 'cover' }}
							/>)}
					</Carousel>
				</Col>
				<Col span={12} lg={isCardHovered ? 11 : 12} xl={isCardHovered ? 13 : 14} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
				>
					<Row align={'top'} justify={'space-between'}>
						<Col>
							<Typography.Title
								style={{ margin: 0 }}
								level={3}
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
					{
						isCardHovered &&
						<Divider style={{ margin: '5px 0 ' }}/>
					}
					<Row>
						<Col span={24}>
							<Space>
								<AimOutlined />
								<Typography.Text>
									{workspace.location_value}
								</Typography.Text>
							</Space>
						</Col>
					</Row>
					{
						isCardHovered &&
						<Divider style={{ margin: '5px 0 ' }}/>
					}
					<Row>
						<Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '0' }}>
							{workspace.description}
						</Typography.Paragraph>
					</Row>
					{ isCardHovered &&
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

					<Row align={'top'} justify={'space-between'}>

						<Typography.Title
							style={{ margin: 0 }}
							level={4}
						>10000 Рублей
						</Typography.Title>

					</Row>
					<Row>
						<Col flex={'auto'}>
							<Button
								style={{ width: '100%', marginTop: '10px' }}
								type={isCardHovered ? 'primary' : 'default'}
								size={'large'}
								onClick={navigateToWorkspacePage}>
								Перейти к оформлению
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default WorkspaceCardDesktop;
