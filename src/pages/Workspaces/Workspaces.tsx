import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import WorkspaceList from '../../modules/WorkspaceList';
import { Card, Col, Row } from 'antd';
import PageHeader from '../../components/PageHeader';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import PropertiesOfAdvantagesList from '../../components/SuperAdvantages/PropertiesOfAdvantagesList';
import WorkspaceListHeader from '../../modules/WorkspaceList/components/WorkspaceListHeader';

const Workspaces: React.FC = () => {
	const breakpoint = useBreakpoint(true);

	const isLarge = !breakpoint.xxl;
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
				<WorkspaceListHeader />
			</PageWrapper>
			<PageWrapper marginTop={48}>
				<Row gutter={[24, 24]}>
					<Col span={isLarge ? 24 : 6}>
						<Card >
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
