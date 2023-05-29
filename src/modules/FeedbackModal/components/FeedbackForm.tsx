import * as React from 'react';
import { Button, notification, Row, Space } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextAreaField from '../../../form/fields/TextAreaField';
import { addCommentSchema, type IAddCommentValues } from '../../../form/schemas/addCommentSchema';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import RateField from '../../../form/fields/RateField';
import { useAddCommentMutation } from '../../../redux/api/comments.api';

interface Props {
	handleClose: () => void;
	workspaceId: string;
}

const FeedbackForm: React.FC<Props> = ({ workspaceId, handleClose }) => {
	const [addComment, { isLoading }] = useAddCommentMutation();
	const { handleSubmit, control, reset } = useForm<IAddCommentValues>({
		resolver: yupResolver(addCommentSchema),
	});

	const onSubmit: SubmitHandler<IAddCommentValues> = async(values) => {
		addComment({ ...values, workspace_id: workspaceId })
			.then(() => {
				notification.success({
					message: 'Отзыв успешно оставлен',
				});
				reset();
				handleClose();
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При добавлении отзыва произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Space direction={'vertical'} size={'large'} style={{ display: 'flex', width: '100%' }}>
				<RateField name={'rating'} control={control} label={'Оценка места'} />
				<TextAreaField name={'text'} control={control} label={'Ваш комментарий'}/>
				<TextAreaField name={'advantages'} control={control} label={'Опишите достоинства'}/>
				<TextAreaField name={'disadvantages'} control={control} label={'Опишите недостатки'}/>
				{/* <ImageUploadField */}
				{/*	uploadName={'image_file'} */}
				{/*	name={'images'} */}
				{/*	control={control} */}
				{/*	label={'Фотографии'} */}
				{/*	listType={'picture-card'} */}
				{/*	showGrid rotationSlider aspectSlider showReset */}
				{/* /> */}
				<Row justify={'end'}>
					<Space>
						<Button loading={isLoading} htmlType={'submit'} onClick={handleClose}>
							Отмена
						</Button>
						<Button loading={isLoading} htmlType={'submit'} type={'primary'}>
							Добавить отзыв
						</Button>
					</Space>
				</Row>
			</Space>
		</form>
	);
};

export default FeedbackForm;
