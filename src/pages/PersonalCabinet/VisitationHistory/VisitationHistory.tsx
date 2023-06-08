import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Col, Row } from 'antd';
import VisitationList from '../../../modules/VisitationList';

const VisitationHistory: React.FC = () => {
	return (
		<Row gutter={[36, 36]}>
			<Col span={24}>
				<Title level={3} style={{ margin: 0 }}>Мои посещения</Title>
			</Col>
			<Col span={24}>
				<VisitationList />

			</Col>
		</Row>
	);
};

export default VisitationHistory;
