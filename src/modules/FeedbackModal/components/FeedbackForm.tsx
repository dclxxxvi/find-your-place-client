import * as React from 'react';
import { Button, notification, Row, Space } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextAreaField from '../../../form/fields/TextAreaField';
import ImageUploadField from '../../../form/fields/ImageUploadField';
import { addCommentSchema, type IAddCommentValues } from '../../../form/schemas/addCommentSchema';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import RateField from '../../../form/fields/RateField';

interface Props {
	handleClose: () => void;
}

const FeedbackForm: React.FC<Props> = ({ handleClose }) => {
	const { handleSubmit, control, reset } = useForm<IAddCommentValues>({
		resolver: yupResolver(addCommentSchema),
	});

	const onSubmit: SubmitHandler<IAddCommentValues> = async(values) => {
		new Promise((resolve) => resolve(values))
			.then(() => {
				notification.success({
					message: 'Отзыв успешно оставлен',
				});
				reset();
				handleClose();
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При оставлении отзыва произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={'large'} style={{ display: 'flex' }}>
				<RateField name={'rating'} control={control} label={'Оценка места'} />
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
						<Button htmlType={'submit'} onClick={handleClose}>
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
