import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';
import { type IWorkspace } from '../../../types';
import { GeolocationControl, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

interface Props extends Pick<IWorkspace, 'longitude' | 'latitude'> {

}

const WorkspaceMap: React.FC<Props> = ({ longitude, latitude }) => {
	const point = [latitude, longitude];

	return (
		<Space id={EAnchorTabs.MAP} direction={'vertical'} size={'large'} style={{ width: '100%' }}>
			<Title style={{ margin: 0 }} level={3}>{EAnchorTabsLabels.MAP}</Title>
			<Map
				style={{
					maxWidth: '90vw',
					maxHeight: '40vh',
					width: 600,
					height: 400,
				}}
				state={{
					center: point,
					zoom: 11,
					controls: [],
				}}
				height={'100%'}
				width={'100%'}
			>
				<Placemark geometry={point} />
				<ZoomControl/>
				<GeolocationControl/>
			</Map>
		</Space>
	);
};

export default React.memo(WorkspaceMap);
