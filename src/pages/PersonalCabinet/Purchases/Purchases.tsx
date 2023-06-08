import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Col, Row } from 'antd';
import PurchaseList from '../../../modules/PurchaseList';

const Purchases: React.FC = () => {
	return (
		<Row gutter={[36, 36]}>
			<Col span={24}>
				<Title level={3} style={{ margin: 0 }}>Мои покупки</Title>
			</Col>
			<Col span={24}>
				<PurchaseList />
			</Col>
		</Row>
	);
};

export default Purchases;
