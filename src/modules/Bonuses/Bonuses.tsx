import * as React from 'react';
import { Typography, Row, Col, Space } from 'antd';
import { BONUS_CONDITIONS } from './consts';
import ConditionCard from './components/ConditionCard';
import BonusBalance from './components/BonusBalance';
import BonusesHistory from './components/BonusesHistory';

const Bonuses: React.FC = () => {
	return (
		<Row gutter={[36, 36]}>
			<Col>
				<BonusBalance />
			</Col>
			<Col span={24}>
				<Space size={'large'} direction={'vertical'}>
					<Typography.Title level={4} style={{ margin: 0 }}>
						История пополнений
					</Typography.Title>
					<BonusesHistory />
				</Space>
			</Col>
			<Col span={24}>
				<Space size={'large'} direction={'vertical'}>
					<Typography.Title level={4} style={{ margin: 0 }}>
					Условия программы
					</Typography.Title>
					<Row gutter={[16, 16]}>
						{BONUS_CONDITIONS.map(({ icon, title, description }) => {
							return (
								<Col xs={24} sm={24} md={12} xxl={6} key={title}>
									<ConditionCard icon={icon} title={title} description={description}/>
								</Col>
							);
						})}
					</Row>
				</Space>
			</Col>
		</Row>
	);
};

export default Bonuses;
