import * as React from 'react';
import WorkspaceCard from '../../components/WorkspaceCard';
import { type IWorkspace } from '../../types';

const workspaceMocks: IWorkspace[] = Array.from({ length: 10 }).map((_, index) => ({
	id: String(index),
	title: `Коворкинг ${index}`,
	description: `Представлем коворинг под номером ${index}`,
	phone_number: `8932332${index}`,
	site_url: `http:/example/coworking${index}`,
	rating: Math.random() * 5,
	approved: true,
	address: { latitude: 50, longitude: 50 },
	createdAt: new Date(),
	updatedAt: new Date(),
}));

const WorkspaceList: React.FC = () => {
	return (
		<>
			{workspaceMocks.map(ws => {
				return <WorkspaceCard key={ws.id} workspace={ws}/>;
			})}
		</>
	);
};

export default WorkspaceList;
