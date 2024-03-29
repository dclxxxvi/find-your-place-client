import * as React from 'react';
import { Card, Col, Row, Skeleton } from 'antd';
import ImageCarousel from '../../WorkspaceCard/components/ImageCarousel';
import Typography from 'antd/es/typography';
import RatingField from '../../WorkspaceCard/components/RatingField';
import { type IWorkspace } from '../../../types';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import Address from '../../WorkspaceCard/components/Address';
import PhoneNumber from '../../WorkspaceCard/components/PhoneNumber';

interface Props {
	workspace?: IWorkspace;
}

const WorkspaceCard: React.FC<Props> = ({ workspace }) => {
	const { xs, sm, md, lg, xl } = useBreakpoint(true);

	const navigate = useNavigate();

	if (!workspace) {
		return <Skeleton active/>;
	}

	return (
		<Card size={'small'}>
			<Row gutter={[24, 16]} justify={'center'}>
				<Col xs={24} sm={12} md={7} lg={12} xl={9} xxl={5}>
					<ImageCarousel images={workspace.images} showOne />
				</Col>
				<Col xs={24} sm={12} md={17} lg={12} xl={15} xxl={19} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
					<Row align={'top'} justify={'space-between'}>
						<Col span={14} lg={15} xl={13} xxl={16}>
							<Typography.Title
								style={{ margin: 0, cursor: 'pointer' }}
								level={5}
								onClick={() => navigate('../')}
							>{workspace.title}
							</Typography.Title>
						</Col>
						<Col span={10} xs={24} sm={24} md={10} lg={24} xl={11} xxl={8}>
							<Row justify={(lg && !xl) ? 'start' : 'end'}>
								<RatingField
									rating={workspace.rating}
									commentsCount={workspace.comments.length}
									isNextLine={((lg || sm || xs) && !xl && !md)}/>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Address locationValue={workspace.location_value}/>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<PhoneNumber phoneNumber={workspace.phone_number}/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default WorkspaceCard;
