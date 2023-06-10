import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import { Col, Row } from 'antd';
import PageHeader from '../../components/PageHeader';
import AddWorkspaceForm from '../../modules/WorkspaceForm/AddWorkspaceForm';

const EditWorkspace: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<PageHeader title={'Редактирование пространства'} breadcrumbs={
					<Breadcrumbs>
						<BreadcrumbItem to={'/'} >Главная</BreadcrumbItem>
						<BreadcrumbItem to={'/profile/suggested_places'} >Предложенные места</BreadcrumbItem>
					</Breadcrumbs>
				}/>
				<Row>
					<Col span={24}>
						<AddWorkspaceForm edit/>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default EditWorkspace;
