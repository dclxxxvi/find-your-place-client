import * as React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, notification, Row, Space } from 'antd';
import TextField from '../../form/fields/TextField';
import { type IUserDataFormValues, userDataSchema } from '../../form/schemas/userDataSchema';
import { useEditUserMutation, useGetUserQuery } from '../../redux';
import { useEffect } from 'react';

const UserDataForm: React.FC = () => {
	const { data, isLoading: isUserFetching } = useGetUserQuery(null);
	const [editUser, { isLoading: isUserEditing }] = useEditUserMutation();
	const isLoading = isUserFetching || isUserEditing;

	const { handleSubmit, control, reset } = useForm<IUserDataFormValues>({
		resolver: yupResolver(userDataSchema),
	});

	useEffect(() => {
		reset(data?.data);
	}, [data?.data, reset]);

	const onSubmit: SubmitHandler<IUserDataFormValues> = async(values) => {
		editUser(values).unwrap()
			.then(() => {
				notification.success({
					message: 'Данные отредактированы',
					description: 'Данные вашего профиля успешно отредактированы...',
				});
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При редактировании профиля произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={36} style={{ width: '100%' }}>
				<Row gutter={[24, 24]}>
					<Col sm={24} lg={12} style={{ width: '100%' }}>
						<TextField disabled={isLoading} name={'first_name'} control={control} label={'Имя'}/>
					</Col>
					<Col sm={24} lg={12} style={{ width: '100%' }}>
						<TextField disabled={isLoading} name={'last_name'} control={control} label={'Фамилия'}/>
					</Col>
					{/* <Col sm={24} lg={12} style={{ width: '100%' }}> */}
					{/*	<TextField disabled={isLoading} name={'username'} control={control}
					label={'Имя пользователя'}/> */}
					{/* </Col> */}
					<Col sm={24} lg={12} style={{ width: '100%' }}>
						<TextField disabled={isLoading} name={'phone'} control={control} label={'Телефон'}/>
					</Col>
					<Col sm={24} lg={12} style={{ width: '100%' }}>
						<TextField disabled={isLoading} name={'email'} control={control} label={'Электронная почта'}/>
					</Col>
				</Row>
				<Row gutter={[24, 24]} justify='end'>
					<Col>
						<Button loading={isLoading} onClick={() => reset()}>
							Отменить
						</Button>
					</Col>
					<Col>
						<Button loading={isLoading} type={'primary'} htmlType={'submit'}>
							Отправить
						</Button>
					</Col>
				</Row>
			</Space>
		</form>
	);
};

export default UserDataForm;
