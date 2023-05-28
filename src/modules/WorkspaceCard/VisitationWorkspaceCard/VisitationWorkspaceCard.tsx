import * as React from 'react';
import { Card, Col, Rate, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import { AimOutlined, PhoneOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { type IWorkspace } from '../../../types';
import FeedbackModal from '../../FeedbackModal';
import ImageCarousel from '../components/ImageCarousel';

interface Props {
	workspace: IWorkspace;
	hideFeedback?: boolean;
}

const VisitationWorkspaceCard: React.FC<Props> = ({ workspace, hideFeedback }) => {
	const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
	const handleOpenFeedbackModal = (open: boolean) => () => setOpenFeedbackModal(open);

	return (
		<Card size={'small'}>
			<Row gutter={24} align={'middle'}>
				<Col span={6}>
					<ImageCarousel images={workspace.images} />
				</Col>
				<Col span={18}>
					<Row justify={'space-between'} align={'stretch'}>
						<Col span={12}>
							<Row justify={'start'} gutter={[8, 10]} align={'stretch'}>
								<Space direction={'vertical'} size={4}>
									<Typography.Title style={{ margin: 0 }} level={4}>
										{workspace.title}
									</Typography.Title>
									<Typography.Text strong>
										{ 'Посещение 21 января 2022' }
									</Typography.Text>
								</Space>
								<Col span={24}/>
								<Space direction={'vertical'} size={4}>
									<Space>
										<AimOutlined />
										<Typography.Text>
											{workspace.location_value}
										</Typography.Text>
									</Space>
									<Space>
										<PhoneOutlined />
										<Typography.Text>
											{workspace.phone_number}
										</Typography.Text>
									</Space>
								</Space>
							</Row>
						</Col>
						{!(hideFeedback ?? false) && <Col span={ 12 }>
							<Row justify={ 'end' }>
								<Space direction={ 'vertical' } align={ 'end' }>
									<Rate allowHalf defaultValue={ workspace.rating } disabled></Rate>
									<Typography.Text type="secondary">
										{ `${workspace.feedback_count as number} отзывов` }
									</Typography.Text>
									<Typography.Text
										onClick={ handleOpenFeedbackModal(true) }
										strong
										style={ { cursor: 'pointer' } }
									>
										{ 'Оставить отзыв' }
									</Typography.Text>
								</Space>
							</Row>
						</Col> }
					</Row>
				</Col>
			</Row>
			<FeedbackModal open={openFeedbackModal} handleClose={handleOpenFeedbackModal(false)} workspace={workspace}/>
		</Card>
	);
};

export default React.memo(VisitationWorkspaceCard);
