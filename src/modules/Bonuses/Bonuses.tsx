import * as React from 'react';
import { Typography, Row, Col, Space } from 'antd';
import { BONUS_CONDITIONS } from './consts';
import ConditionCard from './components/ConditionCard';
import BonusBalance from './components/BonusBalance';

const Bonuses: React.FC = () => {
	return (
		<Row gutter={[32, 32]}>
			<Col>
				<BonusBalance />
			</Col>
			<Col span={24}>
				<Space size={'large'} direction={'vertical'}>
					<Typography.Title level={4} style={{ margin: 0 }}>
					История пополнений
					</Typography.Title>
					<Typography.Text>Раздел пока в разработке. Следите за обновлениями!</Typography.Text>
					{/* { */}
					{/*	bonusesHistory.map((bonus) => ( */}
					{/*		<Space key={bonus.bonus} direction='vertical' style={{ width: '100%' }}> */}
					{/*			<Space style={{ width: '100%' }}> */}
					{/*				<Typography.Title level={5} style={{ margin: 0 }}>
					{bonus.bonus}
					</Typography.Title> */}
					{/*				<Typography.Text style={{ margin: 0 }}>{bonus.description}</Typography.Text> */}
					{/*			</Space> */}
					{/*			<Divider style={{ margin: 0 }}/> */}
					{/*		</Space> */}
					{/*	)) */}
					{/* } */}
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
