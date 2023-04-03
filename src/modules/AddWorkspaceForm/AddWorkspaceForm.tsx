import * as React from 'react';
import { Button, notification, Space } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextField from '../../form/fields/TextField';
import TextAreaField from '../../form/fields/TextAreaField';
import { addWorkspaceFormSchema, type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import AddressField from '../../form/fields/AddressField';
import { useYMaps } from '@pbe/react-yandex-maps';
import { mapGeocodeToAddress } from './consts';
import { valuesToFormData } from '../../form/helpers';
import ImageUploadField from '../../form/fields/ImageUploadField';
import { useAddWorkspaceMutation } from '../../redux';

const AddWorkspaceForm: React.FC = () => {
	const ymaps = useYMaps(['geocode']);
	const transformAddressStringToAddress = async(addressString: string) => {
		return await ymaps?.geocode(addressString, { results: 1 })
			.then(data => mapGeocodeToAddress(data, addressString))
			.catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При преобразовании адреса произошла ошибка...',
			}));
	};

	const [addWorkspace] = useAddWorkspaceMutation();

	const { handleSubmit, control, reset } = useForm<IAddWorkspaceFormValues>({
		resolver: yupResolver(addWorkspaceFormSchema),
	});

	const onSubmit: SubmitHandler<IAddWorkspaceFormValues> = async(values) => {
		const address = await transformAddressStringToAddress(values.address.value);
		const formData = valuesToFormData({ ...values, address });

		addWorkspace(formData).unwrap()
			.then(() => {
				notification.success({
					message: 'Коворкинг создан',
					description: 'Коворкинг успешно создан и отправлен на модерацию...',
				});
				reset();
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При создании коворкинга произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
				<AddressField
					name={'address.value'}
					control={control}
					label={'Адрес'}
					style={{ width: '100%' }}
				/>
				<TextField name={'title'} control={control} label={'Название'}/>
				<TextAreaField name={'description'} control={control} label={'Описание'}/>
				<ImageUploadField
					name={'images'}
					control={control}
					label={'Фотографии'}
					listType={'picture-card'}
					showGrid rotationSlider aspectSlider showReset
				/>
				<Button htmlType={'submit'}>
					Отправить
				</Button>
			</Space>
		</form>
	);
};

export default AddWorkspaceForm;
