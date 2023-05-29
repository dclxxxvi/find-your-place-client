import * as React from 'react';
import { Button, Col, Divider, notification, Row, Space } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextField from '../../form/fields/TextField';
import TextAreaField from '../../form/fields/TextAreaField';
import { addWorkspaceSchema, type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import AddressField from '../../form/fields/AddressField';
import ImageUploadField from '../../form/fields/ImageUploadField';
import { useAddWorkspaceMutation } from '../../redux';
import CheckboxField from '../../form/fields/CheckboxField';
import Typography from 'antd/es/typography';
import { useAddress } from './hooks/useAddress';
import ParametersFieldGroup from './components/ParametersFieldGroup';

const DividerWithoutMargins = () => <Divider style={{ margin: 0 }}/>;

const AddWorkspaceForm: React.FC = () => {
	const getAddressByString = useAddress();
	const [addWorkspace, { isLoading }] = useAddWorkspaceMutation();

	const { handleSubmit, control, reset } = useForm<IAddWorkspaceFormValues>({
		resolver: yupResolver(addWorkspaceSchema),
	});

	const onSubmit: SubmitHandler<IAddWorkspaceFormValues> = async(values) => {
		const address = await getAddressByString(values.location_value);
		if (!address) {
			return;
		}

		addWorkspace({ ...values, ...address }).unwrap()
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
					name={'location_value'}
					control={control}
					label={'Адрес'}
					style={{ width: '100%' }}
				/>
				<DividerWithoutMargins/>
				<TextField name={'title'} control={control} label={'Название'}/>
				<DividerWithoutMargins/>
				<TextAreaField rows={4} name={'description'} control={control} label={'Описание'}/>
				<DividerWithoutMargins/>
				<ImageUploadField
					name={'images'}
					uploadName={'image_file'}
					action={`${process.env.REACT_APP_API_URL || ''}workspace/upload_image`}
					control={control}
					label={'Фотографии'}
					listType={'picture-card'}
					showGrid rotationSlider aspectSlider showReset
				/>
				<DividerWithoutMargins/>
				<ParametersFieldGroup control={control} />
				<DividerWithoutMargins/>
				<Typography.Text>Контакты места</Typography.Text>
				{/* <MaskedInputField */}
				{/*	name={'phone_number'} */}
				{/*	label={'Номер телефона'} */}
				{/*	control={control} */}
				{/*	inputMode={'tel'} */}
				{/*	mask={'+70000000000'} */}
				{/* /> */}
				<TextField name={'phone_number'} label={'Номер телефона'} control={control} inputMode={'tel'} />
				<TextField name={'site_url'} label={'Сайт'} control={control} />
				<DividerWithoutMargins/>
				<Space direction={'vertical'}>
					<Typography.Text>Согласие на обработку персональных данных</Typography.Text>
					<CheckboxField
						name={'agree'}
						control={control}
						label={'Я согласен на обработку персональных данных'}
					/>
				</Space>
				<Row justify={'end'} gutter={16}>
					<Col>
						<Button onClick={() => reset()}>
							Отмена
						</Button>
					</Col>
					<Col>
						<Button loading={isLoading} type={'primary'} htmlType={'submit'}>
							Добавить пространство
						</Button>
					</Col>
				</Row>
			</Space>
		</form>
	);
};

export default AddWorkspaceForm;
