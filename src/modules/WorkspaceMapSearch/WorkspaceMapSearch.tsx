import * as React from 'react';
import { Clusterer, Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { useCallback, useState } from 'react';
import WorkspaceDrawer from './components/WorkspaceDrawer';

const center = [56.836927, 60.599308];

export const workspacesMocks = Array.from({ length: 50 }).map((_, index) => ({
	id: String(index),
	name: `Коворкинг номер ${index}`,
	address: {
		latitude: 56.836927 + Math.random() * 0.2 - 0.1,
		longitude: 60.599308 + Math.random() * 0.2 - 0.1,
	},
}));

const WorkspaceMapSearch: React.FC = () => {
	const [open, setOpen] = useState(false);
	const showDrawer = useCallback(() => setOpen(true), []);
	const onClose = useCallback(() => setOpen(false), []);

	const [currentWorkspaceId, setCurrentWorkspaceId] = useState<string | undefined>(undefined);

	const openWorkspaceInfo = (workspaceId: string) => {
		setCurrentWorkspaceId(workspaceId);
		showDrawer();
	};

	return (
		<YMaps query={{ lang: 'en_RU' }}>
			<Map
				state={{
					center,
					zoom: 9,
					controls: [],
				}}
				width="100vw"
				height="500px"
			>
				<Clusterer>
					{workspacesMocks.map(ws => {
						return <Placemark
							key={ws.id}
							geometry={[ws.address.latitude, ws.address.longitude]}
							onClick={() => openWorkspaceInfo(ws.id)}
						/>;
					})}
				</Clusterer>
				<ZoomControl/>
			</Map>
			<WorkspaceDrawer workspaceId={currentWorkspaceId} open={open} onClose={onClose} />
		</YMaps>
	);
};

export default React.memo(WorkspaceMapSearch);
