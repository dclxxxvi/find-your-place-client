import * as React from 'react';
import { type IBaseType } from '../../../types';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';
import Title from 'antd/es/typography/Title';
import { Row, Space } from 'antd';
import Parameters from '../../WorkspaceCard/WorkspaceCard/components/Parameters';
import { useCallback } from 'react';

interface Props {
	services?: IBaseType[];
}

const WorkspaceServices: React.FC<Props> = ({ services }) => {
	const renderNoService = useCallback(() => {
		if (!services || services?.length === 0) {
			return <Title style={{ margin: 0 }} level={5}>
				Дополнительные услуги не указаны
			</Title>;
		}
	}, [services]);

	return (
		<Space id={EAnchorTabs.SERVICES} direction={'vertical'} size={'large'} style={{ width: '100%' }}>
			<Title style={{ margin: 0 }} level={3}>{EAnchorTabsLabels.SERVICES}</Title>
			{renderNoService()}
			{ services && <Row gutter={ [12, 12] }>
				<Parameters parameters={ services } isOverviewCard={false}/>
			</Row> }
		</Space>
	);
};

export default WorkspaceServices;
