import * as React from 'react';
import { Col, Row } from 'antd';
import { useGetUserQuery } from '../../../redux';
import TextField from '../../../form/fields/TextField';

interface UserDataProps {
	control: any;
}

const UserData: React.FC<UserDataProps> = ({ control }) => {
	const { isLoading } = useGetUserQuery(null);

	return (
		<Row gutter={[24, 24]}>
			<Col sm={24} md={12}>
				<TextField disabled={isLoading} name={'first_name'} control={control} label={'Имя'}/>
			</Col>
			<Col sm={24} md={12}>
				<TextField disabled={isLoading} name={'last_name'} control={control} label={'Фамилия'}/>
			</Col>
			<Col sm={24} md={12}>
				<TextField disabled={isLoading} name={'username'} control={control} label={'Имя пользователя'}/>
			</Col>
			<Col sm={24} md={12}>
				<TextField disabled={isLoading} name={'phone'} control={control} label={'Телефон'}/>
			</Col>
		</Row>
	);
};

export default React.memo(UserData);
