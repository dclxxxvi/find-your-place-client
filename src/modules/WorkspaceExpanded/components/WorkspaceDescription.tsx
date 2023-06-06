import * as React from 'react';
import { Space } from 'antd';
import Title from 'antd/es/typography/Title';
import Typography from 'antd/es/typography';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';

interface Props {
	description: string;
}

const WorkspaceDescription: React.FC<Props> = ({ description }) => {
	return (
		<Space id={EAnchorTabs.DESCRIPTION} direction={'vertical'} size={'large'}>
			<Title style={{ margin: 0 }} level={3}>{EAnchorTabsLabels.DESCRIPTION}</Title>
			<Typography.Text>{description || 'Нет описания'}</Typography.Text>
		</Space>
	);
};

export default React.memo(WorkspaceDescription);
