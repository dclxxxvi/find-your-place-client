import * as React from 'react';
import { Button, Card, Col, Image, Rate, Row, Space } from 'antd';
import { type IWorkspace } from '../../types';
import Typography from 'antd/es/typography';
import exampleImage from './img.png';
import { AimOutlined } from '@ant-design/icons';

interface Props {
	workspace: IWorkspace;
}

const WorkspaceCard: React.FC<Props> = ({ workspace }) => {
	return (
		<Card size={'small'}>
			<Row gutter={24} align={'middle'}>
				<Col span={10}>
					<Image src={exampleImage} placeholder={'Картинка'} />
				</Col>
				<Col span={14}>
					<Space direction={'vertical'} size={'middle'}>
						<Row align={'top'} justify={'space-between'}>
							<Col>
								<Typography.Title style={{ margin: 0 }} level={4}>{workspace.title}</Typography.Title>
							</Col>
							<Col>
								<Row>
									<Rate allowHalf defaultValue={workspace.rating} disabled></Rate>
								</Row>
								<Row justify={'end'}>
									<Typography.Text type="secondary">{'8 отзывов'}</Typography.Text>
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
								<Row gutter={12}>
									<Col>
										<AimOutlined />
									</Col>
									<Col>
										<Typography.Text>
											{workspace.address.value}
										</Typography.Text>
									</Col>
								</Row>
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
								<Button style={{ width: '100%' }} type={'primary'} >
									300 руб/час или 5000 руб/месяц
								</Button>
							</Col>
						</Row>
					</Space>
				</Col>
			</Row>
		</Card>
	);
};

export default React.memo(WorkspaceCard);
