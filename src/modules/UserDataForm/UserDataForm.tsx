import * as React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, notification, Row, Space } from 'antd';
import TextField from '../../form/fields/TextField';
import { type IUserDataFormValues, userDataSchema } from '../../form/schemas/userDataSchema';

const UserDataForm: React.FC = () => {
	const { handleSubmit, control, reset } = useForm<IUserDataFormValues>({
		resolver: yupResolver(userDataSchema),
	});

	const onSubmit: SubmitHandler<IUserDataFormValues> = async(values) => {
		new Promise((resolve) => resolve(values))
			.then(() => {
				notification.success({
					message: 'Данные отредактированы',
					description: 'Данные вашего профиля успешно отредактированы...',
				});
				reset();
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При редактировании профиля произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={36}>
				<Row gutter={[24, 24]}>
					<Col sm={24} md={12}>
						<TextField name={'name'} control={control} label={'Имя'}/>
					</Col>
					<Col sm={24} md={12}>
						<TextField name={'surname'} control={control} label={'Фамилия'}/>
					</Col>
					<Col sm={24} md={12}>
						<TextField name={'email'} control={control} label={'Почта'}/>
					</Col>
					<Col sm={24} md={12}>
						<TextField name={'phone'} control={control} label={'Телефон'}/>
					</Col>
				</Row>
				<Row gutter={[24, 24]}>
					<Col>
						<Button onClick={() => reset()}>
							Отменить
						</Button>
					</Col>
					<Col>
						<Button type={'primary'} htmlType={'submit'}>
							Отправить
						</Button>
					</Col>
				</Row>
			</Space>
		</form>
	);
};

export default UserDataForm;
