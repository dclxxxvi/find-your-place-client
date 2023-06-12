import * as React from 'react';
import { Card, Col, Row, Skeleton, Space } from 'antd';
import Typography from 'antd/es/typography';
import { useState } from 'react';
import FeedbackModal from '../../FeedbackModal';
import ImageCarousel from '../components/ImageCarousel';
import { type IVisitation } from '../../../types/IVisitation';
import RatingField from '../components/RatingField';
import { useGetWorkspaceByIdQuery } from '../../../redux';
import Address from '../components/Address';
import PhoneNumber from '../components/PhoneNumber';
import useWorkspaceCard from '../hooks';
import { getFormattedDate } from '../consts';
import dayjs from 'dayjs';
import { getVisitStatus } from './consts';

interface Props {
	visitation: IVisitation;
}

const VisitationWorkspaceCard: React.FC<Props> = ({ visitation }) => {
	const { data, isLoading } = useGetWorkspaceByIdQuery({ id: visitation?.workspace_id });
	const workspace = data?.data;
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace?.id || '');

	const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
	const handleOpenFeedbackModal = (open: boolean) => () => setOpenFeedbackModal(open);

	const visitStatus = getVisitStatus(visitation?.start_date, visitation?.end_date);

	if (!workspace || isLoading) {
		return <Card size={'small'}><Skeleton active/></Card>;
	}

	return (
		<Card size={'small'}>
			<Row gutter={[24, 24]} align={'middle'}>
				<Col sm={24} md={8}>
					<ImageCarousel showOne images={workspace.images} />
				</Col>
				<Col sm={24} md={16}>
					<Row justify={'space-between'} align={'stretch'} gutter={[10, 10]}>
						<Col span={14} xs={24} sm={14}>
							<Space direction={'vertical'} size={'middle'}>
								<Space direction={'vertical'} size={4}>
									<Typography.Title
										level={4}
										onClick={navigateToWorkspacePage}
										style={{
											margin: 0,
											cursor: 'pointer',
										}}
									>
										{workspace.title}
									</Typography.Title>
									<Typography.Text strong>
										{ `Посещение: ${getFormattedDate(dayjs(visitation.start_date))}` }
									</Typography.Text>
								</Space>
								<Typography.Text>
									<strong>Статус: </strong>{visitStatus}
								</Typography.Text>
							</Space>
						</Col>
						<Col span={ 10 } xs={24} sm={10}>
							<Row justify={ 'end' }>
								<Space direction={ 'vertical' } align={ 'end' }>
									<RatingField
										rating={workspace.rating}
										commentsCount={workspace.comments.length}
									/>
									<Typography.Text
										onClick={ handleOpenFeedbackModal(true) }
										strong
										style={ { cursor: 'pointer' } }
									>
										{ 'Оставить отзыв' }
									</Typography.Text>
								</Space>
							</Row>
						</Col>
						<Col span={24}/>
						<Col span={24}>
							<Space direction={'vertical'} size={4} style={{ width: '100%' }}>
								<Address locationValue={workspace.location_value}/>
								<PhoneNumber phoneNumber={workspace.phone_number}/>
							</Space>
						</Col>
					</Row>
				</Col>
			</Row>
			<FeedbackModal open={openFeedbackModal} handleClose={handleOpenFeedbackModal(false)} workspace={workspace}/>
		</Card>
	);
};

export default React.memo(VisitationWorkspaceCard);
