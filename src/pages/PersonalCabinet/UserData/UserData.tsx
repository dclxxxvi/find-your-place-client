import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Col, Row } from 'antd';
import UserDataForm from '../../../modules/UserDataForm';

const UserData: React.FC = () => {
	return (
		<Row gutter={[36, 36]}>
			<Col span={24}>
				<Title level={3} style={{ margin: 0 }}>Мои данные</Title>
			</Col>
			<Col span={24}>
				<UserDataForm />
			</Col>
		</Row>
	);
};

export default UserData;
