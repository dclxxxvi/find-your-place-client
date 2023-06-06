import * as React from 'react';
import { Card, Col, Row, Skeleton, Space } from 'antd';
import Typography from 'antd/es/typography';
import { useState } from 'react';
import FeedbackModal from '../../FeedbackModal';
import ImageCarousel from '../components/ImageCarousel';
import { type IVisitation } from '../../../types/IVisitation';
import RatingField from '../components/RatingField';
import { useGetWorkspaceByIdQuery } from '../../../redux';
import { getStringDate } from './consts';
import Address from '../components/Address';
import PhoneNumber from '../components/PhoneNumber';

interface Props {
	visitation: IVisitation;
}

const VisitationWorkspaceCard: React.FC<Props> = ({ visitation }) => {
	const { data, isLoading } = useGetWorkspaceByIdQuery({ id: visitation?.workspace_id });
	const workspace = data?.data;

	const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
	const handleOpenFeedbackModal = (open: boolean) => () => setOpenFeedbackModal(open);

	if (!workspace || isLoading) {
		return <Card size={'small'}><Skeleton/></Card>;
	}

	return (
		<Card size={'small'}>
			<Row gutter={24} align={'middle'}>
				<Col xs={24} lg={6}>
					<ImageCarousel showOne images={workspace.images} />
				</Col>
				<Col xs={24} lg={18}>
					<Row justify={'space-between'} align={'stretch'} gutter={[10, 10]}>
						<Col span={12} xs={24} lg={12}>
							<Space direction={'vertical'} size={4}>
								<Typography.Title style={{ margin: 0 }} level={4}>
									{workspace.title}
								</Typography.Title>
								<Typography.Text strong>
									{ `Посещение: ${getStringDate(new Date(visitation.start_date))}` }
								</Typography.Text>
							</Space>
						</Col>
						<Col span={ 12 } xs={24} lg={12}>
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
