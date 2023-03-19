import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { PageWrapper } from '../../components';
import WorkspaceList from '../../modules/WorkspaceList';
import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';

const WorkspacesList: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<Row>
					<Title level={2}>Коворкинги в Екатеринбурге</Title>
				</Row>
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
