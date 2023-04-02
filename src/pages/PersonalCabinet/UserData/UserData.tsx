import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';
import UserDataForm from '../../../modules/UserDataForm';

const UserData: React.FC = () => {
	return (
		<Space direction={'vertical'} size={36}>
			<Title level={3} style={{ margin: 0 }}>Мои данные</Title>
			<UserDataForm />
		</Space>
	);
};

export default UserData;
