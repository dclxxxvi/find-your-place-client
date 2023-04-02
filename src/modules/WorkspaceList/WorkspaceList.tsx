import * as React from 'react';
import { type IWorkspace } from '../../types';
import { Col, Row } from 'antd';
import { toInteger } from 'lodash';
import { WorkspaceCard } from '../../components/WorkspaceCard';

const workspaceMocks: IWorkspace[] = Array.from({ length: 10 }).map((_, index) => ({
	id: String(index),
	title: `Коворкинг ${index}`,
	description: `коворинг под номером ${index} 
	коворинг под номером ${index} коворинг под номером ${index} 
	коворинг под номером ${index} коворинг под номером ${index} 
	коворинг под номером ${index} коворинг под номером ${index}`,
	phone_number: `8932332${Math.random() * 11234}`,
	site_url: `http:/example/coworking${index}`,
	rating: Math.random() * 5,
	approved: true,
	address: {
		latitude: 50,
		longitude: 50,
		value: `ул. Пушкина ${toInteger(Math.random() * 98)}, д. Колотушкина ${toInteger(Math.random() * 112)}`,
	},
	createdAt: new Date(),
	updatedAt: new Date(),
}));

const WorkspaceList: React.FC = () => {
	return (
		<Row gutter={[0, 24]}>
			{workspaceMocks.map(ws => {
				return (
					<Col span={24} key={ws.id}>
						<WorkspaceCard workspace={ws}/>
					</Col>
				);
			})}
		</Row>
	);
};

export default WorkspaceList;
