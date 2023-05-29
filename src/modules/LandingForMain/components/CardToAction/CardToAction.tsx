import * as React from 'react';
import { Card, Space, Typography } from 'antd';

interface CardToActionProps {
	title: string;
	description: string;
	index: number;
}
const CardToAction: React.FC<CardToActionProps> = ({ title, description, index }) => {
	return (
		<Card style={{ height: '100%', boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
			<Space align={'center'} size={'large'}>
				<Typography.Title level={3} style={{ margin: 0 }}>
					{index}
				</Typography.Title>
				<div>
					<Typography.Title level={3} style={{ marginTop: 0 }}>
						{title}
					</Typography.Title>
					<Typography.Paragraph>
						{description}
					</Typography.Paragraph>
				</div>

			</Space>

		</Card>
	);
};

export default CardToAction;
