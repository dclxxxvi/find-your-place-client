import * as React from 'react';
import { Card, Divider, Space, Typography, Row, Col } from 'antd';
import { gray } from '@ant-design/colors';

interface BonusesProps {
	amountOfBonuses?: number;
	bonusesHistory?: any[];
}

const conditionCard = (icon: string, title: string, description: string) => {
	return (
		<Card style={{ height: '100%', boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
			<Space align={'center'} size={'large'}>
				<Typography.Title level={3} style={{ margin: 0 }}>
					<span className="material-symbols-outlined">
						{icon}
					</span>
				</Typography.Title>
				<div>
					<Typography.Title level={3} style={{ marginTop: 0 }}>
						{title}
					</Typography.Title>
					<Typography.Paragraph style={{ margin: 0 }}>
						{description}
					</Typography.Paragraph>
				</div>

			</Space>

		</Card>
	);
};
const Bonuses: React.FC<BonusesProps> = ({
	amountOfBonuses = 500, bonusesHistory = [
		{ bonus: '+ 500 рублей', description: 'Бонус за добавление места' },
		{ bonus: '- 1500 рублей ', description: 'Списание за операцию' },
		{ bonus: '+ 500 рублей ', description: 'Кешбек за покупку' },
	],
}) => {
	return (
		<>
			<Typography.Title level={3} style={{ marginTop: 0 }}>Мои бонусы</Typography.Title>
			<Space direction='vertical' size='large' style={{ width: '100%' }}>
				<Space direction='vertical' size='middle'>
					<Card style={{ boxShadow: ` 0px 4px 4px ${gray[0]}` }}>
						<Space direction='vertical'>
							<Space>
								<Typography.Title level={3} style={{ margin: 0 }}>
									{amountOfBonuses}
								</Typography.Title>
								<Typography.Text>
									рублей бонусами
								</Typography.Text>
							</Space>
							<Typography.Paragraph style={{ marginBottom: 0 }}>
								Доступно для оплаты
							</Typography.Paragraph>
						</Space>
					</Card>
				</Space>
				<Space direction='vertical' size='middle'>
					<Typography.Title level={4} style={{ margin: 0 }}>
						История пополнений
					</Typography.Title>
					{
						bonusesHistory.map((bonus) => (
							<Space key={bonus.bonus} direction='vertical' style={{ width: '100%' }}>
								<Space style={{ width: '100%' }}>
									<Typography.Title level={5} style={{ margin: 0 }}>{bonus.bonus}</Typography.Title>
									<Typography.Text style={{ margin: 0 }}>{bonus.description}</Typography.Text>
								</Space>
								<Divider style={{ margin: 0 }}/>
							</Space>
						))
					}
				</Space>
				<Space direction='vertical' size='middle' style={{ width: '100%' }}>
					<Typography.Title level={4} style={{ margin: 0 }}>
						Условия программы
					</Typography.Title>
					<Row gutter={[12, 12]}>
						<Col xs={24} sm={24} md={12} xxl={6} >
							{conditionCard('percent', 'до 30%', 'Скидка на оплату')}
						</Col>
						<Col xs={24} sm={24} md={12} xxl={6}>
							{conditionCard('balance', '1Б = 1₽', '1 бонус равен 1 рублю')}
						</Col>
						<Col xs={24} sm={24} md={12} xxl={6}>
							{conditionCard('currency_exchange', '+ ₽', 'Кешбек при оплате')}
						</Col>
						<Col xs={24} sm={24} md={12} xxl={6}>
							{conditionCard('redeem', 'Для вас', 'Индивидуальные предложения')}
						</Col>
					</Row>
				</Space>
			</Space>
		</>
	);
};

export default Bonuses;
