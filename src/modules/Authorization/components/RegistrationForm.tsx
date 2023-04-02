import * as React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, notification, Space } from 'antd';
import TextField from '../../../form/fields/TextField';
import { type IRegistrationFormValues, registrationSchema } from '../../../form/schemas/registrationSchema';

interface Props {
	handleClose: () => void;
}

const RegistrationForm: React.FC<Props> = ({ handleClose }) => {
	const { handleSubmit, control, reset } = useForm<IRegistrationFormValues>({
		resolver: yupResolver(registrationSchema),
	});

	const onSubmit: SubmitHandler<IRegistrationFormValues> = async(values) => {
		new Promise((resolve) => resolve(values))
			.then(() => {
				notification.success({
					message: 'Вы успешно зарегистрированы',
				});
				reset();
				handleClose();
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При регистрации произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
				<TextField name={'email'} control={control} label={'Почта'}/>
				<TextField name={'password'} control={control} label={'Пароль'} type={'password'}/>
				<TextField name={'confirm_password'} control={control} label={'Подтвердите пароль'} type={'password'}/>
				<Button htmlType={'submit'}>Зарегистрироваться</Button>
			</Space>
		</form>
	);
};

export default React.memo(RegistrationForm);
