import * as React from 'react';
import { Button, Col, Row, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../components';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserMenu from './components/UserMenu';
import AppTitle from './components/AppTitleLogo';
import { useGetUserQuery } from '../../redux';

const NavbarDesktop: React.FC = () => {
	const navigate = useNavigate();
	const { data: userData } = useGetUserQuery(null);

	return (
		<Content>
			<PageWrapper>
				<Row justify={'space-between'} align={'middle'}>
					<Col span={10}>
						<AppTitle />
					</Col>
					<Col span={14}>
						<Row justify='end'>
							<Space size={'large'}>
								{ userData && <Button
									onClick={ () => navigate('workspaces/new') }
									shape={ 'default' }
									type={ 'primary' }
								>
									Добавить пространство
								</Button> }
								<ThemeSwitcher />
								<UserMenu />
							</Space>
						</Row>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default NavbarDesktop;
