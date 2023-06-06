import * as React from 'react';
import { PageWrapper } from '../../components';
import { Col, Row, Space, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { blue } from '@ant-design/colors';
import { useAppSelector } from '../../redux';

const MainFooter: React.FC = () => {
	const { Title, Paragraph } = Typography;
	const { xs } = useBreakpoint(true);
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	const itemStyle = {
		marginBottom: '0',
		color: isDarkMode ? '#FFFFFF' : blue[9],
	};
	const titleStyle = {
		marginTop: 20,
		color: isDarkMode ? '#FFFFFF' : blue[9],
	};
	return (
		<Content>
			<PageWrapper marginTop={16} marginBottom={16}>
				<Row justify={'space-between'} align={'top'} gutter={16}>
					<Col sm={8} md={6} xs={24}>
						<Row justify={'start'} >
							<Space direction={'vertical'}>
								<Title level={5} style={titleStyle}>Пространства</Title>
								<Paragraph strong={true} style={itemStyle}>Найти место</Paragraph>
								<Paragraph strong={true} style={itemStyle}>
									Топ места в Екатеринбурге
								</Paragraph>
								<Paragraph strong={true} style={itemStyle}>Места с переговорками</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={7} md={6} xs={24}>
						<Row justify={xs ? 'start' : 'center'} >
							<Space direction={'vertical'}>
								<Title level={5} style={titleStyle}>Личный кабинет</Title>
								<Paragraph strong={true} style={itemStyle}>Мои данные</Paragraph>
								<Paragraph strong={true} style={itemStyle}>Мои бонусы</Paragraph>
								<Paragraph strong={true} style={itemStyle}>Мои покупки</Paragraph>
								<Paragraph strong={true} style={itemStyle}>История посещений</Paragraph>
								<Paragraph strong={true} style={itemStyle}>Предложенные места</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={5} md={6} xs={24}>
						<Row justify={xs ? 'start' : 'center'} >
							<Space direction={'vertical'}>
								<Title level={5} style={titleStyle}>Бонусная программа</Title>
								<Paragraph strong={true} style={itemStyle}>Условия программы</Paragraph>
							</Space>
						</Row>
					</Col>
					<Col sm={4} md={6} xs={24} >
						<Row justify={xs ? 'start' : 'center'} >
							<Space direction={'vertical'} align={'start'}>
								<Title level={5} style={titleStyle}>Контакты</Title>
								<Paragraph strong={true} style={itemStyle}>+7 800 555 35 35</Paragraph>
								<Paragraph strong={true} style={itemStyle}>mail@mail.com</Paragraph>
								<Paragraph strong={true} style={itemStyle}>Телеграмм</Paragraph>
							</Space>
						</Row>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default MainFooter;
