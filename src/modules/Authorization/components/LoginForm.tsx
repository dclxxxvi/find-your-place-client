import * as React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, notification, Space } from 'antd';
import { type ILoginFormValues, loginSchema } from '../../../form/schemas/loginSchema';
import TextField from '../../../form/fields/TextField';

interface Props {
	handleClose: () => void;
}

const LoginForm: React.FC<Props> = ({ handleClose }) => {
	const { handleSubmit, control, reset } = useForm<ILoginFormValues>({
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<ILoginFormValues> = async(values) => {
		new Promise((resolve) => resolve(values))
			.then(() => {
				notification.success({
					message: 'Вы успешно авторизованы',
				});
				reset();
				handleClose();
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При авторизации произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
				<TextField name={'email'} control={control} label={'Почта'}/>
				<TextField name={'password'} control={control} label={'Пароль'} type={'password'}/>
				<Button htmlType={'submit'}>Войти</Button>
			</Space>
		</form>
	);
};

export default React.memo(LoginForm);
