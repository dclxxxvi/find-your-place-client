import * as React from 'react';
import { Typography, Row, Col } from 'antd';
import BonusesModule from '../../../modules/Bonuses';

const Bonuses: React.FC = () => {
	return (
		<Row gutter={[36, 36]}>
			<Col span={24}>
				<Typography.Title level={3} style={{ margin: 0 }}>Мои бонусы</Typography.Title>
			</Col>
			<Col span={24}>
				<BonusesModule />
			</Col>
		</Row>
	);
};

export default Bonuses;
