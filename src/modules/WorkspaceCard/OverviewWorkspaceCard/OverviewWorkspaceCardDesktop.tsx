import * as React from 'react';
import { Button, Col, Divider, Image, Row } from 'antd';
import Typography from 'antd/es/typography';
import useWorkspaceCard from '../hooks';
import { type IWorkspace } from '../../../types';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import RatingField from '../components/RatingField';
import Parameters from '../WorkspaceCard/components/Parameters';
import ImageCarousel from '../components/ImageCarousel';
import Address from '../components/Address';
import PhoneNumber from '../components/PhoneNumber';

interface Props {
	workspace: IWorkspace;
}

const OverviewWorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspaceExecutionPage } = useWorkspaceCard(workspace.id);
	const { lg, xxl } = useBreakpoint(true);

	return (
		<Row gutter={[24, 16]} align={'stretch'}>
			{
				lg &&
				<Col lg={2} style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					paddingRight: '0',
				}}>
					{workspace.images.map((image) =>
						<div key={ image.id }>
							<Image
								key={ image.id }
								src={ image.media.link }
								width={'100%'}
							/>
						</div>
						,
					)}
				</Col>
			}

			<Col span={12} xs={24} sm={24} lg={12} xl={11} >
				<ImageCarousel images={workspace.images}/>
			</Col>
			<Col span={11} xs={24} sm={24} lg={10} xl={11} style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				gap: !lg ? '10px' : '0',
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
						<RatingField
							rating={workspace.rating}
							commentsCount={workspace.comments.length}
							isNextLine={!xxl}
						/>
					</Col>
				</Row>
				<Divider style={{ margin: '5px 0 ' }}/>
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
				<Divider style={{ margin: '5px 0 ' }}/>
				<Row>
					<Typography.Paragraph ellipsis={{ rows: 2 }}>
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
						style={{ marginTop: 0 }}
						level={4}
					>10000 Рублей
					</Typography.Title>
				</Row>
				<Row>
					<Col flex={'auto'}>
						<Button style={{ width: '100%' }} type={'primary'} onClick={navigateToWorkspaceExecutionPage}>
								Забронировать
						</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default OverviewWorkspaceCardDesktop;
