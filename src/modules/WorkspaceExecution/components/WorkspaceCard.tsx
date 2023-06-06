import * as React from 'react';
import { Card, Col, Row, Space, Skeleton } from 'antd';
import ImageCarousel from '../../WorkspaceCard/components/ImageCarousel';
import Typography from 'antd/es/typography';
import RatingField from '../../WorkspaceCard/components/RatingField';
import { type IWorkspace } from '../../../types';
import { useNavigate } from 'react-router-dom';

interface Props {
	workspace?: IWorkspace;
}

const WorkspaceCard: React.FC<Props> = ({ workspace }) => {
	const navigate = useNavigate();

	if (!workspace) {
		return <Skeleton/>;
	}

	return (
		<Card size={'small'}>
			<Row gutter={[24, 16]} justify={'center'}>
				<Col xs={8} sm={6} md={5} span={4}>
					<ImageCarousel images={workspace.images} showOne />
				</Col>
				<Col xs={16} sm={18} md={19} span={20} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
					<Row align={'top'} justify={'space-between'}>
						<Col span={14} lg={15} xl={17} xxl={16}>
							<Typography.Title
								style={{ margin: 0, cursor: 'pointer' }}
								level={5}
								onClick={() => navigate('../')}
							>{workspace.title}
							</Typography.Title>
						</Col>
						<Col span={10} lg={9} xl={7} xxl={8}>
							<Row justify='end'>
								<RatingField rating={workspace.rating} commentsCount={workspace.comments.length}/>
							</Row>
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
								</Space>
							</Typography.Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default WorkspaceCard;
