import * as React from 'react';
import { Button, Drawer, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../components';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserMenu from './components/UserMenu';
import AppTitle from './components/AppTitleLogo';
import { MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Typography from 'antd/es/typography';
import { useGetUserQuery } from '../../redux';

const NavbarMobile: React.FC = () => {
	const navigate = useNavigate();
	const [drawerOpened, setDrawerOpened] = useState(false);
	const { data: userData } = useGetUserQuery(null);
	const showDrawer = () => setDrawerOpened(true);
	const closeDrawer = () => setDrawerOpened(false);

	return (
		<Content>
			<PageWrapper>
				<Space size={'large'}>
					<Button icon={<MenuUnfoldOutlined />} onClick={showDrawer}/>
					<AppTitle />
				</Space>
			</PageWrapper>
			<Drawer
				title={<AppTitle />}
				placement={'left'}
				open={drawerOpened}
				onClose={closeDrawer}
				width={'100%'}
				contentWrapperStyle={{ maxWidth: 378 }}
				closeIcon={<MenuFoldOutlined />}
			>
				<Space size={'large'} direction={'vertical'} style={{ width: '100%' }}>
					<Space style={{ justifyContent: 'space-between', width: '100%' }}>
						<Space>
							<UserMenu closeDrawer={closeDrawer}/>
							<Typography.Text>Личный кабинет</Typography.Text>
						</Space>
						<ThemeSwitcher/>
					</Space>
					{userData && (
						<Space>
							<Button
								onClick={ () => {
									closeDrawer();
									navigate('workspaces/new');
								} }
								shape={ 'circle' }
								icon={ <PlusOutlined/> }
							/>
							<Typography.Text>Добавить пространство</Typography.Text>
						</Space>
					) }
				</Space>
			</Drawer>
		</Content>
	);
};

export default NavbarMobile;
