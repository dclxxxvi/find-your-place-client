import * as React from 'react';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import PageHeader from '../../components/PageHeader';
import { Content } from 'antd/es/layout/layout';
import WorkspaceExpanded from '../../modules/WorkspaceExpanded';

const Workspace: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<PageHeader breadcrumbs={
					<Breadcrumbs>
						<BreadcrumbItem to={'/'} >Главная</BreadcrumbItem>
						<BreadcrumbItem to={'/workspaces'}>Коворкинги</BreadcrumbItem>
					</Breadcrumbs>
				}/>
			</PageWrapper>
			<PageWrapper>
				<WorkspaceExpanded />
			</PageWrapper>
		</Content>
	);
};

export default Workspace;
