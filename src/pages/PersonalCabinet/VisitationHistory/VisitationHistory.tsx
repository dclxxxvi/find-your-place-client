import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';
import Typography from 'antd/es/typography';

const VisitationHistory: React.FC = () => {
	return (
		<Space direction={'vertical'} size={36}>
			<Title level={3} style={{ margin: 0 }}>Мои посещения</Title>
			<Typography.Text>Раздел в разработке</Typography.Text>
			{/* <VisitationList /> */}
		</Space>
	);
};

export default VisitationHistory;
