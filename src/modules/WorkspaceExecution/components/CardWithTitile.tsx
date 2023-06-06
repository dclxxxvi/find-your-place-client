import * as React from 'react';
import { type PropsWithChildren } from 'react';
import { Card, Space, Typography } from 'antd';

interface Props {
	title: string;
}

const CardWithTitle: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
	return (
		<Card style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
			<Space size={'large'} style={{ width: '100%' }} direction={'vertical'}>
				<Typography.Title level={4} style={{ margin: 0 }}>
					{ title }
				</Typography.Title>
				{children}
			</Space>
		</Card>
	);
};

export default React.memo(CardWithTitle);
