import * as React from 'react';
import { Card, Typography } from 'antd';
import { gray } from '@ant-design/colors';

interface CardBenefitsProps {
	title: string;
	description: string;
}
const CardBenefits: React.FC<CardBenefitsProps> = ({ title, description }) => {
	return (
		<Card style={{ height: '100%', boxShadow: ` 0px 4px 4px ${gray[0]}` }}>
			<Typography.Paragraph>
				{description}
			</Typography.Paragraph>
			<Typography.Title level={3} style={{ marginTop: 0 }}>
				{title}
			</Typography.Title>
		</Card>
	);
};

export default CardBenefits;
