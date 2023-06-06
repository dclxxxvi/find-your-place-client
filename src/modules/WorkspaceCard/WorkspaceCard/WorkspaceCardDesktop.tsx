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

	const copyNumber = async(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		if (event) {
			event.stopPropagation();
		}
		await navigator.clipboard.writeText(workspace.phone_number);
	};
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
						<Col span={14} lg={15} xl={17} xxl={16}>
							<Typography.Title
								style={{ margin: 0 }}
								level={3}
							>{workspace.title}
							</Typography.Title>
						</Col>
						<Col span={10} lg={9} xl={7} xxl={8}>
							<Row justify='end'>
								<RatingField rating={workspace.rating} commentsCount={workspace.comments.length}/>
							</Row>
						</Col>
					</Row>
					<Divider style={{ margin: '5px 0 ' }}/>
					<Row
						onClick={navigateToWorkspacePage}>
						<Col span={24}>
							<Typography.Link>
								<Space align='center'>

									<span className="material-symbols-outlined" style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										padding: '2px',
										boxSizing: 'content-box',
									}}>
									location_on
									</span>

									{workspace.location_value}

								</Space>
							</Typography.Link>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Typography.Link>
								<Space align='center'>

									<span className="material-symbols-outlined" style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										padding: '2px',
										boxSizing: 'content-box',
									}}>
										call</span>
									{workspace.phone_number}

									<span className="material-symbols-outlined" style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										padding: '2px',
										boxSizing: 'content-box',
									}} onClick={async(event) => await copyNumber(event)}>
								content_copy
									</span>

								</Space>
							</Typography.Link>
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
						<Parameters parameters={workspace.parameters} isOverviewCard={true}/>
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
