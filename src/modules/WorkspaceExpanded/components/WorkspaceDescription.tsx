import * as React from 'react';
import { Space } from 'antd';
import Title from 'antd/es/typography/Title';
import Typography from 'antd/es/typography';
import { AnchorTabs } from '../consts';

interface Props {
	description: string;
}

const WorkspaceDescription: React.FC<Props> = ({ description }) => {
	return (
		<Space id={AnchorTabs.DESCRIPTION} direction={'vertical'} size={'large'}>
			<Title style={{ margin: 0 }} level={3}>Описание</Title>
			<Typography.Text>{description}</Typography.Text>
		</Space>
	);
};

export default React.memo(WorkspaceDescription);
