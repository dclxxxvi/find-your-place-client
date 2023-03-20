import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import WorkspaceList from '../../modules/WorkspaceList';
import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import PageHeader from '../../components/PageHeader';

const WorkspacesList: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<PageHeader title={'Коворкинги'} breadcrumbs={
					<Breadcrumbs>
						<BreadcrumbItem to={'/'} >Главная</BreadcrumbItem>
						<BreadcrumbItem to={'/workspaces'}>Коворкинги</BreadcrumbItem>
					</Breadcrumbs>
				}/>
				<Row gutter={{ sm: 16, md: 24 }} align={'middle'}>
					<Col>
						<Title level={4}>
							Найдено 73 места
						</Title>
					</Col>
					<Col>
						<Title level={4}>
							По популярности
						</Title>
					</Col>
					<Col>
						<Title level={4}>
							Показать на карте
						</Title>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={6}>

					</Col>
					<Col span={18}>
						<WorkspaceList />
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default WorkspacesList;
