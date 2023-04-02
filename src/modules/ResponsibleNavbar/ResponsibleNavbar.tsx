import * as React from 'react';
import { Button, Col, Row, Switch } from 'antd';
import { toggleTheme as toggleThemeAction, useAppDispatch, useAppSelector } from '../../redux';
import { Header } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { PersonalCabinetRoutes } from '../../router/routes';

const ResponsibleNavbar: React.FC = () => {
	const navigate = useNavigate();
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	const dispatch = useAppDispatch();
	const toggleTheme = () => dispatch(toggleThemeAction());

	return (
		<Header style={isDarkMode ? {} : { backgroundColor: 'white' }}>
			<Row justify={'space-between'}>
				<Col>
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col>
							<span
								style={{ fontSize: 24, cursor: 'pointer' }}
								onClick={() => navigate('/')}
							>
								Find your place
							</span>
						</Col>
						<Col>
							<Switch
								checked={isDarkMode}
								onChange={toggleTheme}
								checkedChildren="Dark"
								unCheckedChildren="Light"
							/>
						</Col>
					</Row>
				</Col>
				<Col>
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col><Button
							onClick={() => navigate('workspaces/new')}
							shape={'default'}
							type={'primary'}
						>Добавить пространство</Button>
						</Col>
						<Col><Button
							shape={'circle'}
							icon={<UserOutlined />}
							onClick={() => navigate(PersonalCabinetRoutes.PROFILE)} />
						</Col>
					</Row>
				</Col>
			</Row>
		</Header>
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
