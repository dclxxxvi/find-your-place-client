import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';
import Typography from 'antd/es/typography';

const Purchases: React.FC = () => {
	return (
		<Space direction={'vertical'} size={36}>
			<Title level={3} style={{ margin: 0 }}>Мои покупки</Title>
			<Typography.Text>Раздел в разработке</Typography.Text>
			{/* <PurchaseList /> */}
		</Space>
	);
};

export default Purchases;
