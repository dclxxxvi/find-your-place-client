import * as React from 'react';
import { type IBaseEntity } from '../../../types';
import { AnchorTabs } from '../consts';
import Title from 'antd/es/typography/Title';
import Typography from 'antd/es/typography';
import { Space } from 'antd';
import SuperAdvantage from '../../../components/SuperAdvantages/SuperAdvantage';

interface Props {
	services?: IBaseEntity[];
}

const WorkspaceServices: React.FC<Props> = ({ services }) => {
	return (
		<Space id={AnchorTabs.SERVICES} direction={'vertical'} size={'large'}>
			<Title style={{ margin: 0 }} level={3}>Услуги</Title>
			<Typography.Text>
				<SuperAdvantage advantage={'24mp'}/>
				<SuperAdvantage advantage={'face_retouching_off'}/>
			</Typography.Text>
		</Space>
	);
};

export default WorkspaceServices;
