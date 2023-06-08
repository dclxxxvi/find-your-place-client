import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Col, Row } from 'antd';
import SuggestedList from '../../../modules/SuggestedList';

const SuggestedPlaces: React.FC = () => {
	return (
		<Row gutter={[36, 36]}>
			<Col span={24}>
				<Title level={3} style={{ margin: 0 }}>Мои предложенные места</Title>
			</Col>
			<Col span={24}>
				<SuggestedList />
			</Col>
		</Row>
	);
};

export default SuggestedPlaces;
