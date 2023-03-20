import * as React from 'react';
import { Button, Space } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextField from '../../form/fields/TextField';
import TextAreaField from '../../form/fields/TextAreaField';
import { addWorkspaceFormSchema, type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const AddWorkspaceForm: React.FC = () => {
	const { handleSubmit, control } = useForm<IAddWorkspaceFormValues>({
		resolver: yupResolver(addWorkspaceFormSchema),
	});

	const onSubmit: SubmitHandler<IAddWorkspaceFormValues> = (values) => {
		console.log(values);
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
				<TextField name={'address'} control={control} label={'Адрес'}/>
				<TextField name={'title'} control={control} label={'Название'}/>
				<TextAreaField name={'description'} control={control} label={'Описание'}/>
				<Button htmlType={'submit'}>
					Отправить
				</Button>
			</Space>
		</form>
	);
};

export default AddWorkspaceForm;
