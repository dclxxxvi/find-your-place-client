import * as React from 'react';
import { Clusterer, GeolocationControl, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import WorkspaceDrawer from './components/WorkspaceDrawer';
import { useWorkspaceDrawer } from './hooks/useWorkspaceDrawer';
import { useGetWorkspacesQuery } from '../../redux';

const center = [56.836927, 60.599308]; // TODO: центр Еката, надо получать координаты пользователя

const WorkspaceMapSearch: React.FC = () => {
	const {
		workspaceId,
		open,
		openWorkspaceDrawer,
		closeWorkspaceDrawer,
	} = useWorkspaceDrawer();

	const { data: workspaces } = useGetWorkspacesQuery({ size: 100 });

	return (
		<>
			<Map
				state={{
					center,
					zoom: 9,
					controls: [],
				}}
				height="80vh"
				width={'100%'}
			>
				<Clusterer>
					{workspaces?.data.items.map(ws => {
						return <Placemark
							key={ws.id}
							geometry={[ws.latitude, ws.longitude]}
							onClick={() => openWorkspaceDrawer(ws.id)}
						/>;
					})}
				</Clusterer>
				<ZoomControl/>
				<GeolocationControl />
			</Map>
			<WorkspaceDrawer workspaceId={workspaceId} open={open} onClose={closeWorkspaceDrawer} />
		</>
	);
};

export default React.memo(WorkspaceMapSearch);
