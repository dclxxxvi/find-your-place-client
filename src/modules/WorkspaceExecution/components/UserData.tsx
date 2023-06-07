import * as React from 'react';
import { Col, Row } from 'antd';
import { useGetUserQuery } from '../../../redux';
import TextField from '../../../form/fields/TextField';
import { Skeleton } from 'antd/lib';

interface UserDataProps {
	control: any;
}

const UserData: React.FC<UserDataProps> = ({ control }) => {
	const { data, isLoading } = useGetUserQuery(null);

	const userData = data?.data;

	if (isLoading || !userData) {
		return <Skeleton />;
	}

	return (
		<Row gutter={[24, 24]}>
			<Col sm={24} md={12}>
				<TextField
					disabled
					name={'first_name'}
					defaultValue={userData.first_name}
					control={control}
					label={'Имя'}/>
			</Col>
			<Col sm={24} md={12}>
				<TextField
					disabled
					name={'last_name'}
					defaultValue={userData.last_name}
					control={control}
					label={'Фамилия'}/>
			</Col>
			<Col sm={24} md={12}>
				<TextField
					disabled
					name={'phone'}
					defaultValue={userData.phone}
					control={control}
					label={'Телефон'}/>
			</Col>
			<Col sm={24} md={12}>
				<TextField
					disabled
					name={'email'}
					defaultValue={userData.email}
					control={control}
					label={'Электронная почта'}/>
			</Col>
		</Row>
	);
};

export default React.memo(UserData);
