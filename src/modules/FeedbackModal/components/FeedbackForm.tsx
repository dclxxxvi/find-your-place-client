import * as React from 'react';
import { Button, notification, Row, Space } from 'antd';
import { useForm } from 'react-hook-form';
import TextAreaField from '../../../form/fields/TextAreaField';
import ImageUploadField from '../../../form/fields/ImageUploadField';

interface Props {
	handleClose: () => void;
}

const FeedbackForm: React.FC<Props> = ({ handleClose }) => {
	const { handleSubmit, control, reset } = useForm({
		// resolver: yupResolver(loginSchema),
	});

	const onSubmit = async(values: any) => {
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
			<Space direction={'vertical'} size={'large'} style={{ display: 'flex' }}>
				<TextAreaField name={'comment'} control={control} label={'Ваш комментарий'}/>
				<TextAreaField name={'advantages'} control={control} label={'Опишите достоинства'}/>
				<TextAreaField name={'disadvantages'} control={control} label={'Опишите недостатки'}/>
				<ImageUploadField
					name={'images'}
					control={control}
					label={'Фотографии'}
					listType={'picture-card'}
					showGrid rotationSlider aspectSlider showReset
				/>
				<Row justify={'end'}>
					<Space>
						<Button htmlType={'submit'}>
							Отмена
						</Button>
						<Button htmlType={'submit'} type={'primary'}>
							Добавить отзыв
						</Button>
					</Space>
				</Row>
			</Space>
		</form>
	);
};

export default FeedbackForm;
