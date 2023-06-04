import * as React from 'react';
import { useState } from 'react';
import { Button, Col, Row, Space, Divider, Card } from 'antd';
import Typography from 'antd/es/typography';
import { type IWorkspace } from '../../../types';
import useWorkspaceCard from '../hooks';
import RatingField from '../components/RatingField';
import Parameters from './components/Parameters';
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
			}}
			size={'small'}
			onMouseEnter={() => setIsCardHovered(true)}
			onMouseLeave={() => setIsCardHovered(false)}
		>
			<Row gutter={[24, 16]} justify={'center'}>
				<Col span={12} lg={12} xl={10} >
					<ImageCarousel images={workspace.images} />
				</Col>
				<Col span={12} lg={12} xl={14} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}} onClick={navigateToWorkspacePage}
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
							<RatingField rating={workspace.rating} commentsCount={workspace.comments.length}/>
						</Col>
					</Row>
					<Divider style={{ margin: '5px 0 ' }}/>
					<Row>
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
					</Row>
					<Divider style={{ margin: '5px 0 ' }}/>
					<Row>
						<Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '0' }}>
							{workspace.description}
						</Typography.Paragraph>
					</Row>

					<Row>
						<Divider style={{ margin: '5px 0 ' }}/>
						<Parameters parameters={workspace.parameters} />
						<Divider style={{ margin: '5px 0 ' }}/>
					</Row>

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
