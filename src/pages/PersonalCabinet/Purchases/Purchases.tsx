import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';
import PurchaseList from '../../../modules/PurchaseList';

const Purchases: React.FC = () => {
	return (
		<Space direction={'vertical'}>
			<Title level={3} style={{ margin: 0 }}>Мои покупки</Title>
			<PurchaseList />
		</Space>
	);
};

export default Purchases;
