import * as React from 'react';
import { Button, Col, Divider, notification, Row, Space } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextField from '../../../form/fields/TextField';
import TextAreaField from '../../../form/fields/TextAreaField';
import { addWorkspaceSchema, type IAddWorkspaceFormValues } from '../../../form/schemas/addWorkspaceSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import AddressField from '../../../form/fields/AddressField';
import ImageUploadField from '../../../form/fields/ImageUploadField';
import { useAddWorkspaceMutation } from '../../../redux';
import CheckboxField from '../../../form/fields/CheckboxField';
import Typography from 'antd/es/typography';
import { useAddress } from '../hooks/useAddress';
import ParametersFieldGroup from './../components/ParametersFieldGroup';
import TariffArrayField from './../components/TariffArrayField';
import { useEditWorkspace } from '../hooks/useEditWorkspace';

const DividerWithoutMargins = () => <Divider style={{ margin: 0 }}/>;

interface Props {
	edit?: boolean;
}

const AddWorkspaceForm: React.FC<Props> = ({ edit }) => {
	const getAddressByString = useAddress();
	const [addWorkspace, { isLoading: isAdding }] = useAddWorkspaceMutation();

	const { handleSubmit, control, reset, getFieldState } = useForm<IAddWorkspaceFormValues>({
		resolver: yupResolver(addWorkspaceSchema),
	});

	const { editWorkspace, isLoading: isEditing } = useEditWorkspace(reset, edit);

	const isLoading = isEditing || isAdding;

	const onSubmit: SubmitHandler<IAddWorkspaceFormValues> = async(values) => {
		const address = await getAddressByString(values.location_value);
		if (!address) {
			return;
		}

		if (!edit) {
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
		}

		if (edit) {
			editWorkspace({ ...values, ...address }).unwrap()
				.then(() => {
					notification.success({
						message: 'Коворкинг отредактирован',
						description: 'Коворкинг успешно отредактирован...',
					});
				}).catch(() => notification.error({
					message: 'Произошла ошибка',
					description: 'При редактировании коворкинга произошла ошибка...',
				}));
		}
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }} >
				<AddressField
					name={'location_value'}
					control={control}
					label={'Адрес'}
					style={{ width: '100%' }}
					disabled={isLoading}
				/>
				<DividerWithoutMargins/>
				<TextField disabled={isLoading} name={'title'} control={control} label={'Название'}/>
				<DividerWithoutMargins/>
				<TextAreaField disabled={isLoading} rows={4} name={'description'} control={control} label={'Описание'}/>
				<DividerWithoutMargins/>
				<ImageUploadField
					disabled={isLoading || edit}
					name={'images'}
					uploadName={'image_file'}
					action={`${process.env.REACT_APP_API_URL || ''}workspace/upload_image`}
					control={control}
					label={'Фотографии'}
					listType={'picture-card'}
					showGrid rotationSlider aspect={16 / 9} showReset
				/>
				<DividerWithoutMargins/>
				<ParametersFieldGroup disabled={isLoading} control={control} />
				<DividerWithoutMargins/>
				<TariffArrayField disabled={isLoading} control={control} fieldState={getFieldState('tariffs')} />
				<DividerWithoutMargins/>
				<Typography.Text>Контакты места</Typography.Text>
				{/* <MaskedInputField */}
				{/*	name={'phone_number'} */}
				{/*	label={'Номер телефона'} */}
				{/*	control={control} */}
				{/*	inputMode={'tel'} */}
				{/*	mask={'+70000000000'} */}
				{/* /> */}
				<TextField
					name={'phone_number'}
					label={'Номер телефона'}
					control={control}
					inputMode={'tel'}
					disabled={isLoading}
				/>
				<TextField name={'site_url'} label={'Сайт'} control={control} disabled={isLoading}/>
				<DividerWithoutMargins/>
				<Space direction={'vertical'}>
					<Typography.Text>Согласие на обработку персональных данных</Typography.Text>
					<CheckboxField
						disabled={isLoading}
						name={'agree'}
						control={control}
						label={'Я согласен на обработку персональных данных'}
					/>
				</Space>
				<Row justify={'end'} gutter={[16, 16]}>
					<Col>
						<Button onClick={() => reset()} loading={isLoading}>
							Очистить
						</Button>
					</Col>
					<Col>
						<Button loading={isLoading} type={'primary'} htmlType={'submit'}>
							{ edit ? 'Применить' : 'Добавить пространство' }
						</Button>
					</Col>
				</Row>
			</Space>
		</form>
	);
};

export default AddWorkspaceForm;
