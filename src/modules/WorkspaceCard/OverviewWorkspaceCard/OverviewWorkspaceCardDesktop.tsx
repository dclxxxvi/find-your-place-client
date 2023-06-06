import * as React from 'react';
import { Button, Col, Divider, Image, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import useWorkspaceCard from '../hooks';
import { type IWorkspace } from '../../../types';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import RatingField from '../components/RatingField';
import Parameters from '../WorkspaceCard/components/Parameters';
import ImageCarousel from '../components/ImageCarousel';

interface Props {
	workspace: IWorkspace;
}

const OverviewWorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace.id);
	const { lg, xxl } = useBreakpoint(true);
	const copyNumber = async(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		if (event) {
			event.stopPropagation();
		}
		await navigator.clipboard.writeText(workspace.phone_number);
	};
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
						style={{ margin: 0 }}
						level={4}
					>10000 Рублей
					</Typography.Title>

				</Row>
				<Row>
					<Col flex={'auto'}>
						<Button style={{ width: '100%' }} type={'primary'} onClick={navigateToWorkspacePage}>
								Забронировать
						</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default OverviewWorkspaceCardDesktop;
