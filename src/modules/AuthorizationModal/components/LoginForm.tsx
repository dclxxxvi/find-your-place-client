import * as React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, notification, Space } from 'antd';
import { type ILoginFormValues, loginSchema } from '../../../form/schemas/loginSchema';
import TextField from '../../../form/fields/TextField';
import { useLoginMutation } from '../../../redux';

interface Props {
	handleClose: () => void;
}

const LoginForm: React.FC<Props> = ({ handleClose }) => {
	const [login] = useLoginMutation();

	const { handleSubmit, control, reset } = useForm<ILoginFormValues>({
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<ILoginFormValues> = async(values) => {
		login(values).unwrap()
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
				<TextField name={'username'} control={control} label={'Имя пользователя'}/>
				<TextField name={'password'} control={control} label={'Пароль'} type={'password'}/>
				<Button htmlType={'submit'} type={'primary'} style={{ width: '100%', marginTop: 24 }}>
					Войти
				</Button>
			</Space>
		</form>
	);
};

export default React.memo(LoginForm);
