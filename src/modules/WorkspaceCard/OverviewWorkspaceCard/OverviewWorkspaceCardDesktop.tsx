import * as React from 'react';
import { Button, Carousel, Col, Image, Rate, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import { AimOutlined } from '@ant-design/icons';
import useWorkspaceCard from '../hooks';
import { type IWorkspace } from '../../../types';

interface Props {
	workspace: IWorkspace;
}

const OverviewWorkspaceCardDesktop: React.FC<Props> = ({ workspace }) => {
	const { navigateToWorkspacePage } = useWorkspaceCard(workspace.id);

	return (
		<Row gutter={[24, 16]} align={'stretch'}>
			<Col span={12}>
				<Carousel autoplay>
					{workspace.images.map((image) => <Image key={ image.id } src={ image.link }/>)}
				</Carousel>
			</Col>
			<Col span={12}>
				<Space direction={'vertical'} size={'middle'}>
					<Row align={'top'} justify={'space-between'}>
						<Col>
							<Typography.Title
								style={{ margin: 0 }}
								level={4}
							>{workspace.title}
							</Typography.Title>
						</Col>
						<Col>
							<Row>
								<Rate allowHalf defaultValue={workspace.rating} disabled></Rate>
							</Row>
							<Row justify={'end'}>
								<Typography.Text type="secondary">
									{`${workspace.feedback_count as number} отзывов`}
								</Typography.Text>
							</Row>
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
						{/* <Col span={24}> */}
						{/*	<Row gutter={12}> */}
						{/*		<Col> */}
						{/*			<AimOutlined /> */}
						{/*		</Col> */}
						{/*		<Col> */}
						{/*			<Typography.Text> */}
						{/*				Чкаловская */}
						{/*			</Typography.Text> */}
						{/*		</Col> */}
						{/*	</Row> */}
						{/* </Col> */}
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
