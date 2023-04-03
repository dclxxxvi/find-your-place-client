import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';
import VisitationList from '../../../modules/VisitationList';

const VisitationHistory: React.FC = () => {
	return (
		<Space direction={'vertical'}>
			<Title level={3} style={{ margin: 0 }}>Мои посещения</Title>
			<VisitationList />
		</Space>
	);
};

export default VisitationHistory;
