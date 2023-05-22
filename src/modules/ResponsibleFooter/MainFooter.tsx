import * as React from 'react';
import { PageWrapper } from '../../components';
import { Col, Row, Space, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

const MainFooter: React.FC = () => {
	const { Title, Paragraph } = Typography;
	const { xs } = useBreakpoint(true);
	return (
		<Content>
			<PageWrapper marginTop={16} marginBottom={16}>
				<Row justify={'space-between'} align={'top'} gutter={16}>
					<Col sm={8} md={6} xs={12}>
						<Row justify={'start'} >
							<Space direction={'vertical'}>
								<Title level={5} style={{ marginTop: '0.5em' }}>Пространства</Title>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Найти место</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>
									Топ места в Екатеринбурге
								</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Места с переговорками</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={7} md={6} xs={12}>
						<Row justify={xs ? 'start' : 'center'} >
							<Space direction={'vertical'}>
								<Title level={5} style={{ marginTop: '0.5em' }}>Личный кабинет</Title>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Мои данные</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Мои бонусы</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Мои покупки</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>История посещений</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Предложенные места</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={5} md={6} xs={12}>
						<Row justify={xs ? 'start' : 'center'} >
							<Space direction={'vertical'}>
								<Title level={5} style={{ marginTop: '0.5em' }}>Бонусная программа</Title>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Условия программы</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={4} md={6} xs={12} >
						<Row justify={xs ? 'start' : 'center'} >
							<Space direction={'vertical'} align={'start'}>
								<Title level={5} style={{ marginTop: '0.5em' }}>Контакты</Title>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>+7 800 555 35 35</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>mail@mail.com</Paragraph>
								<Paragraph strong={true} style={{ marginBottom: '0' }}>Телеграмм</Paragraph>
							</Space>
						</Row>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default MainFooter;
