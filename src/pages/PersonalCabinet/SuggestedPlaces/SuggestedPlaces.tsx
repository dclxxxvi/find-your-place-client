import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';

const SuggestedPlaces: React.FC = () => {
	return (
		<Space direction={'vertical'} size={36}>
			<Title level={3} style={{ margin: 0 }}>Мои предложенные места</Title>
		</Space>
	);
};

export default SuggestedPlaces;
