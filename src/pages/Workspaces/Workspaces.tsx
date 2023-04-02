import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { BreadcrumbItem, Breadcrumbs, PageWrapper } from '../../components';
import WorkspaceList from '../../modules/WorkspaceList';
import { Card, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import PageHeader from '../../components/PageHeader';
import Typography from 'antd/es/typography';

const Workspaces: React.FC = () => {
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
				<Row gutter={{ sm: 16, md: 24 }} align={'middle'}>
					<Col>
						<Title style={{ margin: 0 }} level={5}>
							Найдено 73 места
						</Title>
					</Col>
					<Col>
						<Title style={{ margin: 0 }} level={5}>
							По популярности
						</Title>
					</Col>
					<Col>
						<Title style={{ margin: 0 }} level={5}>
							Показать на карте
						</Title>
					</Col>
				</Row>
			</PageWrapper>
			<PageWrapper marginTop={48}>
				<Row gutter={48}>
					<Col span={6}>
						<Card>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
							<Row><Typography.Text>Параметры</Typography.Text></Row>
						</Card>
					</Col>
					<Col span={18}>
						<WorkspaceList />
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default Workspaces;
