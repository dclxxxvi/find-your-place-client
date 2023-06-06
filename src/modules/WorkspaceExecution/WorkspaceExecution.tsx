import * as React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { addWorkspaceSchema, type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, notification, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import CheckboxField from '../../form/fields/CheckboxField';
// import { useGetUserQuery, useGetWorkspaceByIdQuery } from '../../redux';
// import { useLocation } from 'react-router-dom';

const WorkspaceExecution: React.FC = () => {
	// const location = useLocation();
	// const workspaceId = location?.pathname?.split('/')?.[2];
	// const { data: userData, isLoading: userDataLoading } = useGetUserQuery(null);
	// const { data: workspace, isLoading: workspaceLoading } = useGetWorkspaceByIdQuery({ id: workspaceId });

	const { handleSubmit, control, reset } = useForm<IAddWorkspaceFormValues>({
		resolver: yupResolver(addWorkspaceSchema),
	});

	const onSubmit: SubmitHandler<IAddWorkspaceFormValues> = async(values) => {
		new Promise((resolve) => resolve(values))
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
			<Row>
				<Col span={24} xs={24} lg={16}>
					<Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
						<Space direction={'vertical'}>
							<Typography.Text>Согласие на обработку персональных данных</Typography.Text>
							<CheckboxField
								name={'agree'}
								control={control}
								label={'Я согласен на обработку персональных данных'}
							/>
						</Space>
					</Space>
				</Col>
				<Col span={24} xs={24} lg={8}>

				</Col>
			</Row>
		</form>
	);
};

export default WorkspaceExecution;
