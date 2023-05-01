import * as React from 'react';
import { Button, Col, Row, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../components';
import Typography from 'antd/es/typography';
import ThemeSwitcher from './components/ThemeSwitcher';
import UserMenu from './components/UserMenu';

const ResponsibleNavbar: React.FC = () => {
	const navigate = useNavigate();

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
							<ThemeSwitcher />
							<UserMenu />
						</Space>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default ResponsibleNavbar;
