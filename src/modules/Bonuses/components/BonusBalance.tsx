import * as React from 'react';
import { Card, Skeleton, Space, Typography } from 'antd';
import { useGetUserQuery } from '../../../redux';
import { gray } from '@ant-design/colors';

const BonusBalance: React.FC = () => {
	const { data, isLoading } = useGetUserQuery(null);

	const bonusBalance = data?.data?.bonus_balance;

	if (!bonusBalance && isLoading) {
		return (
			<Card style={{ boxShadow: ` 0px 4px 4px ${gray[0]}`, width: 200 }}>
				<Skeleton title={false} active/>
			</Card>
		);
	}

	if (!bonusBalance) {
		return (
			<Card style={{ boxShadow: ` 0px 4px 4px ${gray[0]}` }}>
				<Space direction='vertical'>
					<Space>
						<Typography.Text>
						У вас пока нет бонусов
						</Typography.Text>
					</Space>
					<Typography.Paragraph style={{ marginBottom: 0 }}>
					Участвуйте в развитии сервиса, чтобы их получить!
					</Typography.Paragraph>
				</Space>
			</Card>
		);
	}

	return (
		<Card style={{ boxShadow: ` 0px 4px 4px ${gray[0]}` }}>
			<Space direction='vertical'>
				<Space>
					<Typography.Title level={3} style={{ margin: 0 }}>
						{data?.data?.bonus_balance || 0}
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
	);
};

export default BonusBalance;
