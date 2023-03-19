import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import PageWrapper from '../../components/Wrapper/PageWrapper';
import Title from 'antd/es/typography/Title';
import SearchFilter from '../../modules/SearchFilter';
import { Button, Col, Row } from 'antd';
import Image from './assets/top-view-person-writing-on-laptop-with-copy-space 2.png';
import { useAppSelector } from '../../redux';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const getMainBackgroundStyle = (isDarkTheme: boolean) => {
	const backgroundShading = isDarkTheme
		? 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))'
		: 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.2))';
	return ({
		background: `${backgroundShading}, url("${Image as string}") no-repeat center / cover`,
	});
};

const Main: React.FC = () => {
	const navigate = useNavigate();
	const isDarkTheme = useAppSelector(state => state.themeReducer.isDarkTheme);

	const backgroundStyle = useMemo(() => getMainBackgroundStyle(isDarkTheme), [isDarkTheme]);

	return (
		<Content style={backgroundStyle}>
			<PageWrapper marginTop={70}>
				<Title level={2}>Коворкинги для всех</Title>
				<Title level={4}>Найдите место для комфортной работы или учебы</Title>
			</PageWrapper>
			<PageWrapper marginTop={30}>
				<SearchFilter />
			</PageWrapper>
			<PageWrapper marginTop={30} marginBottom={100}>
				<Row justify={'space-between'}>
					<Col>
						<Button>Екатеринбург</Button>
					</Col>
					<Col>
						<Row gutter={{ xs: 8, md: 16 }}>
							<Col>
								<Button type={'default'} onClick={() => navigate('/workspaces/map')}>
									Показать на карте
								</Button>
							</Col>
							<Col>
								<Button type={'primary'} onClick={() => navigate('/workspaces')}>
									Найти место
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default React.memo(Main);
