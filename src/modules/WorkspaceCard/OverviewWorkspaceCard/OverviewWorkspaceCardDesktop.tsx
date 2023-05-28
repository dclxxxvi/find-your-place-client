import * as React from 'react';
import { Button, Carousel, Col, Divider, Image, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import { AimOutlined } from '@ant-design/icons';
import useWorkspaceCard from '../hooks';
import { type IWorkspace } from '../../../types';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import RatingField from '../components/RatingField';

interface Props {
	workspace: IWorkspace;
}

const OverviewWorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace.id);
	const { lg } = useBreakpoint(true);
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
				<Carousel>
					{workspace.images.map((image) =>
						<Image
							key={ image.id }
							src={ image.media.link }
							height='100%'
							width='100%'
							style={{ objectFit: 'cover' }}
						/>)}
				</Carousel>
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
						<RatingField rating={workspace.rating} commentsCount={workspace.comments.length}/>
					</Col>
				</Row>
				<Row>
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
					<Typography.Paragraph ellipsis={{ rows: 2 }}>
						{workspace.description}
					</Typography.Paragraph>
				</Row>
				<Row>
					<Divider style={{ margin: '5px 0 ' }}/>
					<Col span={12}><Space><AimOutlined/><Typography.Text>
						Супер Плюсы
					</Typography.Text></Space></Col>
					<Col span={12}><Space><AimOutlined/><Typography.Text>
						Супер Плюсы
					</Typography.Text></Space></Col>
					<Col span={12}><Space><AimOutlined/><Typography.Text>
						Супер Плюсы
					</Typography.Text></Space></Col>
					<Col span={12}><Space><AimOutlined/><Typography.Text>
						Супер Плюсы
					</Typography.Text></Space></Col>
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
