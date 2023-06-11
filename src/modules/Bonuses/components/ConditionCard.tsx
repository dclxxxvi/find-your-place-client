import { Card, Space, Typography } from 'antd';
import * as React from 'react';

interface Props {
	icon: string;
	title: string;
	description: string;
}

const ConditionCard: React.FC<Props> = ({ icon, title, description }) => {
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

export default ConditionCard;
