import * as React from 'react';
import { Button, Col, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import { AimOutlined } from '@ant-design/icons';
import useWorkspaceCard from '../hooks';
import { type IWorkspace } from '../../../types';
import ImageCarousel from '../components/ImageCarousel';
import RatingField from '../components/RatingField';

interface Props {
	workspace: IWorkspace;
}

const OverviewWorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace.id);

	return (
		<Row gutter={[24, 16]} align={'stretch'}>
			<Col span={12}>
				<ImageCarousel images={workspace.images}/>
			</Col>
			<Col span={12}>
				<Space direction={'vertical'} size={'middle'} style={{ width: '100%' }}>
					<Row align={'top'} justify={'space-between'}>
						<Col>
							<Typography.Title
								style={{ margin: 0 }}
								level={4}
							>{workspace.title}
							</Typography.Title>
						</Col>
						<Col>
							<RatingField rating={workspace.rating} commentsCount={workspace.comments?.length} />
						</Col>
					</Row>
					<Row>
						<Typography.Paragraph ellipsis={{ rows: 2 }}>
							{workspace.description}
						</Typography.Paragraph>
					</Row>
					<Row gutter={8}>
						<Col span={24}>
							<Space>
								<AimOutlined />
								<Typography.Text>
									{workspace.location_value}
								</Typography.Text>
							</Space>
						</Col>
					</Row>
					<Row>
						<Col flex={'auto'}>
							<Button style={{ width: '100%' }} type={'primary'} onClick={navigateToWorkspacePage}>
								Забронировать
							</Button>
						</Col>
					</Row>
				</Space>
			</Col>
		</Row>
	);
};

export default OverviewWorkspaceCardDesktop;
