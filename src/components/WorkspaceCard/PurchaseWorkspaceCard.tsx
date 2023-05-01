import * as React from 'react';
import { Card, Col, Image, Row, Space } from 'antd';
import { type IWorkspace } from '../../types';
import Typography from 'antd/es/typography';
import { AimOutlined, PhoneOutlined } from '@ant-design/icons';

interface Props {
	workspace: IWorkspace;
}

const PurchaseWorkspaceCard: React.FC<Props> = ({ workspace }) => {
	return (
		<Card size={'small'}>
			<Row gutter={24} align={'middle'}>
				<Col span={6}>
					<Image src={workspace.images[0].link} />
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
										{ 'Тариф "Все включено"' }
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
						<Col span={12}>
							<Row justify={'end'} gutter={[0, 12]}>
								<Typography.Title style={{ margin: 0 }} level={4}>
									{'Показать QR-код'}
								</Typography.Title>
								<Col span={24}/>
								<Typography.Text>
									{'Срок действия с 01.01.2022 - 04.04.2023'}
								</Typography.Text>
								<Col span={24}/>
								<Typography.Text strong>
									{'Оставить отзыв'}
								</Typography.Text>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};

export default React.memo(PurchaseWorkspaceCard);
