import * as React from 'react';
import { Button, Col, Row, Space, Switch } from 'antd';
import { toggleTheme as toggleThemeAction, useAppDispatch, useAppSelector } from '../../redux';
import { Content } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { PersonalCabinetRoutes } from '../../router/routes';
import { PageWrapper } from '../../components';
import Typography from 'antd/es/typography';

const ResponsibleNavbar: React.FC = () => {
	const navigate = useNavigate();
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	const dispatch = useAppDispatch();
	const toggleTheme = () => dispatch(toggleThemeAction());

	return (
		<Content>
			<PageWrapper marginTop={16} marginBottom={16}>
				<Row justify={'space-between'} align={'middle'}>
					<Col xs={0} md={8}>
						<Space size={'large'}>
							<Typography.Title
								style={{ cursor: 'pointer', margin: 0 }}
								onClick={() => navigate('/')}
								level={2}
							>
								Find your place
							</Typography.Title>
						</Space>
					</Col>
					<Col>
						<Space size={'large'} wrap={true}>
							<Button
								onClick={() => navigate('workspaces/new')}
								shape={'default'}
								type={'primary'}
							>
								Добавить пространство
							</Button>
							<Switch
								checked={isDarkMode}
								onChange={toggleTheme}
								checkedChildren="Dark"
								unCheckedChildren="Light"
							/>
							<Button
								shape={'circle'}
								icon={<UserOutlined />}
								onClick={() => navigate(
									`${PersonalCabinetRoutes.PROFILE}/${PersonalCabinetRoutes.USER_DATA}`,
								)} />
						</Space>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
		// <Menu mode={'horizontal'} items={[
		// 	{
		// 		key: 'workspaces/add',
		// 		label: <Button>Добавить пространство</Button>,
		// 	},
		// 	{
		// 		key: 'theme/toggle',
		// 		title: `Переключиться на ${isDarkMode ? 'светлую' : 'темную'} тему`,
		// 		label: <Switch
		// 			checked={isDarkMode}
		// 			onChange={toggleTheme}
		// 			checkedChildren="Dark"
		// 			unCheckedChildren="Light"
		// 		/>,
		// 		style: { marginLeft: 'auto' },
		// 	},
		// ]} />
	);
};

export default ResponsibleNavbar;
