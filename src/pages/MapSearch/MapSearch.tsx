import * as React from 'react';
import WorkspaceMapSearch from '../../modules/WorkspaceMapSearch';
import { Content } from 'antd/es/layout/layout';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import PageHeader from '../../components/PageHeader';

const MapSearch: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<PageHeader title={'Поиск по карте'} breadcrumbs={
					<Breadcrumbs>
						<BreadcrumbItem to={'/'} >Главная</BreadcrumbItem>
						<BreadcrumbItem to={'/workspaces/map'}>Поиск по карте</BreadcrumbItem>
					</Breadcrumbs>
				}/>
				<WorkspaceMapSearch />
			</PageWrapper>
		</Content>
	);
};

export default MapSearch;
