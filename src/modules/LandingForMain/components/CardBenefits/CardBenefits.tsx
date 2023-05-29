import * as React from 'react';
import { Card, Typography } from 'antd';

interface CardBenefitsProps {
	title: string;
	description: string;
}
const CardBenefits: React.FC<CardBenefitsProps> = ({ title, description }) => {
	return (
		<Card style={{ height: '100%', boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
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
