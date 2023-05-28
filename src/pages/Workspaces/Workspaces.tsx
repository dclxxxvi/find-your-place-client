import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import WorkspaceList from '../../modules/WorkspaceList';
import { Card, Col, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import PageHeader from '../../components/PageHeader';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import PropertiesOfAdvantagesList from '../../components/SuperAdvantages/PropertiesOfAdvantagesList';

const Workspaces: React.FC = () => {
	const breakpoint = useBreakpoint(true);

	const isLarge = !breakpoint.lg;
	return (
		<Content>
			<PageWrapper>
				<PageHeader title={'Коворкинги'} breadcrumbs={
					<Breadcrumbs>
						<BreadcrumbItem to={'/'} >Главная</BreadcrumbItem>
						<BreadcrumbItem to={'/workspaces'}>Коворкинги</BreadcrumbItem>
					</Breadcrumbs>
				}/>
			</PageWrapper>
			<PageWrapper>
				<Space size={'large'}>
					<Title style={{ margin: 0 }} level={5}>
							Найдено 73 места
					</Title>
					<Title style={{ margin: 0 }} level={5}>
							По популярности
					</Title>
					<Title style={{ margin: 0 }} level={5}>
							Показать на карте
					</Title>
				</Space>
			</PageWrapper>
			<PageWrapper marginTop={48}>
				<Row gutter={[24, 24]}>
					<Col span={isLarge ? 24 : 6}>
						<Card style={{
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
						}}>
							<PropertiesOfAdvantagesList />
						</Card>
					</Col>
					<Col span={isLarge ? 24 : 18}>
						<WorkspaceList />
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default Workspaces;
