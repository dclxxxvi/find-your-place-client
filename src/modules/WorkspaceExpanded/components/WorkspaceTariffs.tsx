import * as React from 'react';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';
import Title from 'antd/es/typography/Title';
import Typography from 'antd/es/typography';
import { Space } from 'antd';

interface Props {
	tariffs?: any;
}

const WorkspaceTariffs: React.FC<Props> = ({ tariffs }) => {
	return (
		<Space id={EAnchorTabs.TARIFFS} direction={'vertical'} size={'large'}>
			<Title style={{ margin: 0 }} level={3}>{EAnchorTabsLabels.TARIFFS}</Title>
			<Typography.Text>{'В разработке'}</Typography.Text>
		</Space>
	);
};

export default WorkspaceTariffs;
