import * as React from 'react';
import { Button, Drawer, Row, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../components';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserMenu from './components/UserMenu';
import AppTitle from './components/AppTitleLogo';
import { MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Typography from 'antd/es/typography';

const NavbarMobile: React.FC = () => {
	const navigate = useNavigate();
	const [drawerOpened, setDrawerOpened] = useState(false);
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
				<Row justify={'end'}>
					<ThemeSwitcher/>
				</Row>
				<Space size={'large'} direction={'vertical'}>
					<Space>
						<Button
							onClick={() => navigate('workspaces/new')}
							shape={'circle'}
							icon={<PlusOutlined />}
						/>
						<Typography.Text>Добавить пространство</Typography.Text>
					</Space>
					<Space>
						<UserMenu/>
						<Typography.Text>Личный кабинет</Typography.Text>
					</Space>
				</Space>
			</Drawer>
		</Content>
	);
};

export default NavbarMobile;
