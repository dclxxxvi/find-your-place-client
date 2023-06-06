import * as React from 'react';
import { Button, Image, notification, Row, Space, Col, Card } from 'antd';
import { type SubmitHandler, useForm } from 'react-hook-form';
import TextAreaField from '../../../form/fields/TextAreaField';
import { addCommentSchema, type IAddCommentValues } from '../../../form/schemas/addCommentSchema';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import RateField from '../../../form/fields/RateField';
import { useAddCommentMutation } from '../../../redux/api/comments.api';
import Typography from 'antd/es/typography';
import CheckboxField from '../../../form/fields/CheckboxField';
import { type IWorkspace } from '../../../types';

interface Props {
	handleClose: () => void;
	workspace: IWorkspace;
}

const FeedbackForm: React.FC<Props> = ({ workspace, handleClose }) => {
	const [addComment, { isLoading }] = useAddCommentMutation();
	const { handleSubmit, control, reset } = useForm<IAddCommentValues>({
		resolver: yupResolver(addCommentSchema),
	});

	const onSubmit: SubmitHandler<IAddCommentValues> = async(values) => {
		addComment({ ...values, workspace_id: workspace.id })
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
			<Space direction={'vertical'} size={'large'} style={{ display: 'flex', width: '100%' }} >
				<Card
					size={'small'}
				>
					<Row gutter={[24, 16]} justify={'center'}>
						<Col span={8}>
							<Image src={workspace.images[0].media.link}/>
						</Col>
						<Col span={16} style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
							<Typography.Title level={5}>
								{workspace.title}
							</Typography.Title>
							<Typography.Text>
								{workspace.location_value}
							</Typography.Text>
						</Col>
					</Row>
				</Card>
				<RateField name={'rating'} control={control} label={'Оценка места'} />
				<TextAreaField name={'text'} control={control} label={'Ваш комментарий'} rows={4} />
				<TextAreaField
					name={'advantages'}
					control={control}
					label={'Опишите достоинства'}
					style={{ width: '100%' }} rows={2} />
				<TextAreaField
					name={'disadvantages'}
					control={control}
					label={'Опишите недостатки'}
					style={{ width: '100%' }}
					rows={2} />
				{/* <ImageUploadField */}
				{/*	uploadName={'image_file'} */}
				{/*	name={'images'} */}
				{/*	control={control} */}
				{/*	label={'Фотографии'} */}
				{/*	listType={'picture-card'} */}
				{/*	showGrid rotationSlider aspectSlider showReset */}
				{/* /> */}
				<Space direction={'vertical'}>
					<Typography.Text>Согласие на обработку персональных данных</Typography.Text>
					<CheckboxField
						name={'agree'}
						control={control}
						label={'Я согласен на обработку персональных данных'}
					/>
				</Space>
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
