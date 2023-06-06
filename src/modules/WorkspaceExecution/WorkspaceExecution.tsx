import * as React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, notification, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import CheckboxField from '../../form/fields/CheckboxField';
import { useExecuteVisitationMutation, useGetUserQuery, useGetWorkspaceByIdQuery } from '../../redux';
import { executeVisitationSchema, type IExecuteVisitationFormValues } from '../../form/schemas/executeVisitation';
import { useLocation } from 'react-router-dom';
import UserData from './components/UserData';
import CardWithTitle from './components/CardWithTitile';
import WorkspaceCard from './components/WorkspaceCard';
import DatePicker from './components/DatePicker';
import { prepareValues } from './consts';

const WorkspaceExecution: React.FC = () => {
	const location = useLocation();
	const workspaceId = location?.pathname?.split('/')?.[2];
	const { data: workspaceData } = useGetWorkspaceByIdQuery({ id: workspaceId });
	const { data: userData } = useGetUserQuery(null);

	const [executeVisitation, { isLoading }] = useExecuteVisitationMutation();
	const { handleSubmit, control, reset } = useForm<IExecuteVisitationFormValues>({
		resolver: yupResolver(executeVisitationSchema),
	});

	const onSubmit: SubmitHandler<IExecuteVisitationFormValues> = async(values) => {
		if (!workspaceData?.data?.id || !userData?.data?.id) {
			return notification.error({
				message: 'Произошла ошибка',
				description: 'При оформлении произошла ошибка...',
			});
		}

		const body = prepareValues(values, workspaceData?.data?.id, userData?.data?.id);

		executeVisitation(body).unwrap()
			.then(() => {
				notification.success({
					message: 'Посещение оформлено',
					description: 'Посещение успешно оформлено! Приходите еще!',
				});
				reset();
			}).catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При оформлении произошла ошибка...',
			}));
	};

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Row gutter={[24, 24]}>
				<Col span={24} xs={24} lg={16}>
					<Row gutter={[24, 24]}>
						<Col span={24}>
							<CardWithTitle title={'Получатель услуги'}>
								<UserData control={control} />
							</CardWithTitle>
						</Col>
						<Col span={24}>
							<CardWithTitle title={'Организация'}>
								<WorkspaceCard workspace={workspaceData?.data} />
							</CardWithTitle>
						</Col>
						<Col span={24}>
							<CardWithTitle title={'Выбор тарифа'}>
								<div>В разработке</div>
							</CardWithTitle>
						</Col>
						<Col span={24}>
							<CardWithTitle title={'Выбор даты и времени'}>
								<DatePicker control={control} />
							</CardWithTitle>
						</Col>
						<Col span={24}>
							<Space direction={'vertical'}>
								<Typography.Text>Согласие на обработку персональных данных</Typography.Text>
								<CheckboxField
									name={'agree'}
									control={control}
									label={'Я согласен на обработку персональных данных'}
								/>
							</Space>
						</Col>
					</Row>
				</Col>
				<Col span={24} xs={24} lg={8}>
					<CardWithTitle title={'Ваш заказ'}>
						<Space direction={'vertical'}>
							<Space direction={'vertical'}>
								<Typography.Text>Организация</Typography.Text>
								<Typography.Text>({workspaceData?.data?.title || '...'})</Typography.Text>
							</Space>
							<Button loading={isLoading} type={'primary'} htmlType={'submit'}>
								Оформить доступ
							</Button>
						</Space>
					</CardWithTitle>
				</Col>
			</Row>
		</form>
	);
};

export default WorkspaceExecution;
