import * as React from 'react';
import { Card, Col, Row, Skeleton, Space } from 'antd';
import Typography from 'antd/es/typography';
import ImageCarousel from '../components/ImageCarousel';
import { type IVisitation } from '../../../types/IVisitation';
import { useGetWorkspaceByIdQuery } from '../../../redux';
import useWorkspaceCard from '../hooks';
import { useState } from 'react';
import FeedbackModal from '../../FeedbackModal';
import Address from '../components/Address';
import PhoneNumber from '../components/PhoneNumber';
import { getFormattedDate } from '../consts';
import dayjs from 'dayjs';
import { type TInterval } from '../../../types/TInterval';

interface Props {
	visitation: IVisitation;
}

const PurchaseWorkspaceCard: React.FC<Props> = ({ visitation }) => {
	const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
	const handleOpenFeedbackModal = (open: boolean) => () => setOpenFeedbackModal(open);

	const { data, isLoading } = useGetWorkspaceByIdQuery({ id: visitation?.workspace_id });
	const workspace = data?.data;
	const tariff = workspace?.tariffs?.find(t => t.id === visitation.tariff_id);
	const interval = tariff?.interval as TInterval;

	const { navigateToWorkspacePage } = useWorkspaceCard(workspace?.id || '');

	if (!workspace || isLoading) {
		return (
			<Card size={'small'}>
				<Skeleton active/>
			</Card>
		);
	}

	return (
		<Card size={'small'}>
			<Row gutter={[24, 24]} align={'middle'}>
				<Col md={24} xl={8}>
					<ImageCarousel showOne images={workspace.images} />
				</Col>
				<Col md={24} xl={16}>
					<Row gutter={[16, 16]}>
						<Col span={24}>
							<Row justify={'space-between'} gutter={[8, 8]}>
								<Col>
									<Typography.Title
										onClick={navigateToWorkspacePage}
										style={{ margin: 0, cursor: 'pointer' }}
										level={4}
									>
										{workspace.title}
									</Typography.Title>
								</Col>
								<Col>
									<Typography.Text strong onClick={handleOpenFeedbackModal(true)}>
										{'Оставить отзыв'}
									</Typography.Text>
								</Col>
							</Row>
						</Col>
						<Col span={24}>
							<Space direction={'vertical'} size={4}>
								<Typography.Text>
									Тариф <strong>{ `"${tariff?.title || ''}"` }</strong>
								</Typography.Text>
								<Typography.Text>
									{ 'Срок действия: с '}
									<strong>
										{ getFormattedDate(dayjs(visitation?.start_date), interval) }
									</strong>
									{ ' до ' }
									<strong>
										{ getFormattedDate(dayjs(visitation?.end_date), interval)}
									</strong>
								</Typography.Text>
								<Typography.Text>
									Сумма: <strong>{Math.round(visitation?.total_cost) || 0} ₽</strong>
								</Typography.Text>
							</Space>
						</Col>
						<Col span={24}>
							<Space direction={'vertical'} size={4}>
								<Address locationValue={workspace.location_value}/>
								<PhoneNumber phoneNumber={workspace.phone_number} />
							</Space>
						</Col>
					</Row>
				</Col>
			</Row>
			<FeedbackModal open={openFeedbackModal} handleClose={handleOpenFeedbackModal(false)} workspace={workspace}/>
		</Card>
	);
};

export default React.memo(PurchaseWorkspaceCard);
