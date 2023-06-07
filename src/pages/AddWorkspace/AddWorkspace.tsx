import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import { Col, Row } from 'antd';
import AddWorkspaceForm from '../../modules/AddWorkspaceForm';
import PageHeader from '../../components/PageHeader';

const AddWorkspace: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<PageHeader title={'Добавление пространства'} breadcrumbs={
					<Breadcrumbs>
						<BreadcrumbItem to={'/'} >Главная</BreadcrumbItem>
						<BreadcrumbItem to={'/workspaces/new'}>Добавление пространства</BreadcrumbItem>
					</Breadcrumbs>
				}/>
				<Row>
					<Col span={24}>
						<AddWorkspaceForm />
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default AddWorkspace;
