import * as React from 'react';
import { type SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Divider, notification, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import CheckboxField from '../../form/fields/CheckboxField';
import { useExecuteVisitationMutation, useGetUserQuery, useGetWorkspaceByIdQuery } from '../../redux';
import { executeVisitationSchema, type IExecuteVisitationFormValues } from '../../form/schemas/executeVisitation';
import { useLocation } from 'react-router-dom';
import UserData from './components/UserData';
import CardWithTitle from './components/CardWithTitile';
import WorkspaceCard from './components/WorkspaceCard';
import DatePicker from './components/DatePicker';
import { getEndDate, getFormattedDate, getTariff, prepareValues } from './consts';
import TariffChoose from './components/TariffChoose';
import { useEffect, useMemo } from 'react';

const WorkspaceExecution: React.FC = () => {
	const location = useLocation();
	const workspaceId = location?.pathname?.split('/')?.[2];
	const { data: workspaceData } = useGetWorkspaceByIdQuery({ id: workspaceId });
	const { data: userData } = useGetUserQuery(null);

	const [executeVisitation, { isLoading }] = useExecuteVisitationMutation();
	const { handleSubmit, control, reset, setValue } = useForm<IExecuteVisitationFormValues>({
		resolver: yupResolver(executeVisitationSchema),
	});

	const tariffId = useWatch({ control, name: 'tariff_id' });
	const choosenTariff = useMemo(() => getTariff(tariffId, workspaceData?.data?.tariffs),
		[tariffId, workspaceData?.data?.tariffs],
	);

	const startDate = useWatch({ control, name: 'startDate' });
	const endDate = useMemo(() => getEndDate(startDate, choosenTariff),
		[startDate, choosenTariff],
	);

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

	useEffect(() => {
		if (!endDate) return;
		setValue('endDate', endDate);
	}, [setValue, endDate]);

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			<Row gutter={[24, 24]}>
				<Col span={24} xs={24} lg={17}>
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
								<TariffChoose tariffs={workspaceData?.data?.tariffs} control={control} />
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
				<Col span={24} xs={24} lg={7}>
					<CardWithTitle title={'Ваш заказ'}>
						<Space direction={'vertical'}>
							<Space direction={'vertical'}>
								<Row>
									<Col span={24}>
										<Typography.Text>Организация</Typography.Text>
									</Col>
									<Col span={24}>
										<Typography.Text>
											({workspaceData?.data?.title || '...'})
										</Typography.Text>
									</Col>
								</Row>
								<Row>
									<Col span={24}>
										<Typography.Text>Тариф</Typography.Text>
									</Col>
									<Col span={24}>
										<Typography.Text>
											({choosenTariff?.title || '...'})
										</Typography.Text>
									</Col>
								</Row>
								<Typography.Text>
									{ 'Доступ с ' }
									<strong>{getFormattedDate(startDate)}</strong>
									{ ' до ' }
									<strong>{getFormattedDate(endDate)}</strong>
								</Typography.Text>
							</Space>
							<Divider style={{ margin: 0 }}/>
							<Row justify={'space-between'}>
								<Typography.Text>Итого</Typography.Text>
								<Typography.Title style={{ margin: 0 }} level={5}>
									<strong>{choosenTariff?.cost || '...'} ₽</strong>
								</Typography.Title>
							</Row>
							<Divider style={{ margin: 0 }}/>
							<Row align={'stretch'}>
								<Button loading={isLoading} type={'primary'} htmlType={'submit'}>
										Оформить доступ
								</Button>
							</Row>
						</Space>
					</CardWithTitle>
				</Col>
			</Row>
		</form>
	);
};

export default WorkspaceExecution;
