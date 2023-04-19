import * as React from 'react';
import { AnchorTabs } from '../consts';
import Title from 'antd/es/typography/Title';
import Typography from 'antd/es/typography';
import { Space } from 'antd';

interface Props {
	feedback?: any;
}

const WorkspaceFeedback: React.FC<Props> = ({ feedback }) => {
	return (
		<Space id={AnchorTabs.FEEDBACK} direction={'vertical'} size={'large'}>
			<Title style={{ margin: 0 }} level={3}>Отзывы</Title>
			<Typography.Text>{'В разработке'}</Typography.Text>
		</Space>
	);
};

export default WorkspaceFeedback;
