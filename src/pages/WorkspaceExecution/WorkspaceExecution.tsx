import * as React from 'react';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import PageHeader from '../../components/PageHeader';
import { Content } from 'antd/es/layout/layout';
import WorkspaceExecutionModule from '../../modules/WorkspaceExecution';

const WorkspaceExecution: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<PageHeader title={'Оформление доступа'} breadcrumbs={
					<Breadcrumbs>
						<BreadcrumbItem to={'/'} >Главная</BreadcrumbItem>
						<BreadcrumbItem to={'../'}>Коворкинг</BreadcrumbItem>
						<BreadcrumbItem to={''}>Оформление доступа</BreadcrumbItem>
					</Breadcrumbs>
				}/>
				<WorkspaceExecutionModule />
			</PageWrapper>
		</Content>
	);
};

export default WorkspaceExecution;
