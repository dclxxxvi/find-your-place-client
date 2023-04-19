import * as React from 'react';
import { Button, Col, Divider, notification, Row, Space } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextField from '../../form/fields/TextField';
import TextAreaField from '../../form/fields/TextAreaField';
import { addWorkspaceSchema, type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import AddressField from '../../form/fields/AddressField';
import { useYMaps } from '@pbe/react-yandex-maps';
import { mapGeocodeToAddress } from './consts';
import ImageUploadField from '../../form/fields/ImageUploadField';
import { useAddWorkspaceMutation } from '../../redux';
import CheckboxField from '../../form/fields/CheckboxField';
import Typography from 'antd/es/typography';

const DividerWithoutMargins = () => <Divider style={{ margin: 0 }}/>;

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
		resolver: yupResolver(addWorkspaceSchema),
	});

	const onSubmit: SubmitHandler<IAddWorkspaceFormValues> = async(values) => {
		const address = await transformAddressStringToAddress(values.address.value);
		if (!address) {
			return;
		}

		addWorkspace({ ...values, address }).unwrap()
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
				<DividerWithoutMargins/>
				<TextField name={'title'} control={control} label={'Название'}/>
				<DividerWithoutMargins/>
				<TextAreaField name={'description'} control={control} label={'Описание'}/>
				<DividerWithoutMargins/>
				<ImageUploadField
					name={'images'}
					control={control}
					label={'Фотографии'}
					listType={'picture-card'}
					showGrid rotationSlider aspectSlider showReset
				/>
				<DividerWithoutMargins/>

				<DividerWithoutMargins/>
				<Space direction={'vertical'}>
					<Typography.Text>Согласие на обработку персональных данных</Typography.Text>
					<CheckboxField name={'agree'} control={control} label={'Я согласен'}/>
				</Space>
				<Row justify={'end'} gutter={16}>
					<Col>
						<Button onClick={() => reset()}>
							Отмена
						</Button>
					</Col>
					<Col>
						<Button type={'primary'} htmlType={'submit'}>
							Добавить пространство
						</Button>
					</Col>
				</Row>
			</Space>
		</form>
	);
};

export default AddWorkspaceForm;
