import * as React from 'react';
import { PageWrapper } from '../../components';
import { Col, Row, Space, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, PersonalCabinetRoutes } from '../../router/routes';

const MainFooter: React.FC = () => {
	const { Title, Paragraph } = Typography;
	const { md } = useBreakpoint(true);
	const navigate = useNavigate();
	const navigateTo = (path: string) => () => {
		navigate(path);
	};

	return (
		<Content>
			<PageWrapper marginTop={16} marginBottom={16}>
				<Row justify={'space-between'} align={'top'} gutter={16}>
					<Col sm={12} md={6} xs={24}>
						<Row justify={'start'} >
							<Space direction={'vertical'}>
								<Title level={5} style={{ marginTop: 20 }}>Пространства</Title>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(AppRoutes.WORKSPACES)}
								>Найти место</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(AppRoutes.WORKSPACES)}
								>Топ места в Екатеринбурге
								</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(AppRoutes.WORKSPACES)}
								>Места с переговорками</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={12} md={6} xs={24}>
						<Row justify={!md ? 'start' : 'center'} >
							<Space direction={'vertical'}>
								<Title level={5} style={{ marginTop: 20 }}>Личный кабинет</Title>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(`/profile/${PersonalCabinetRoutes.USER_DATA}`)}
								>Мои данные</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(`/profile/${PersonalCabinetRoutes.BONUSES}`)}
								>Мои бонусы</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(`/profile/${PersonalCabinetRoutes.PURCHASES}`)}
								>Мои покупки</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(`/profile/${PersonalCabinetRoutes.VISITATION_HISTORY}`)}
								>История посещений</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(`/profile/${PersonalCabinetRoutes.SUGGESTED_PLACES}`)}
								>Предложенные места</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={12} md={6} xs={24}>
						<Row justify={!md ? 'start' : 'center'} >
							<Space direction={'vertical'}>
								<Title level={5} style={{ marginTop: 20 }}>Бонусная программа</Title>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
									onClick={navigateTo(`/profile/${PersonalCabinetRoutes.BONUSES}`)}
								>Условия программы</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={12} md={6} xs={24} >
						<Row justify={!md ? 'start' : 'center'} >
							<Space direction={'vertical'} align={'start'}>
								<Title level={5} style={{ marginTop: 20 }}>Контакты</Title>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
								>+7 800 555 35 35</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
								>mail@mail.com</Paragraph>
								<Paragraph
									strong={true}
									style={{ marginBottom: '0', cursor: 'pointer' }}
								>Телеграмм</Paragraph>
							</Space>
						</Row>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default MainFooter;
