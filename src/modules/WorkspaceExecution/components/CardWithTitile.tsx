import * as React from 'react';
import { type PropsWithChildren } from 'react';
import { Card, Space, Typography } from 'antd';
import { gray } from '@ant-design/colors';

interface Props {
	title: string;
}

const CardWithTitle: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
	return (
		<Card style={{ boxShadow: `0px 4px 4px ${gray[0]}` }}>
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
