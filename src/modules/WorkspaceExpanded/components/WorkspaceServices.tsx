import * as React from 'react';
import { type IBaseEntity } from '../../../types';
import { AnchorTabs } from '../consts';
import Title from 'antd/es/typography/Title';
import { Row, Space, Col } from 'antd';
import SuperAdvantage from '../../../components/SuperAdvantages/SuperAdvantage';

interface Props {
	services?: IBaseEntity[];
}

const WorkspaceServices: React.FC<Props> = ({ services }) => {
	return (
		<Space id={AnchorTabs.SERVICES} direction={'vertical'} size={'large'} style={{ width: '100%' }}>
			<Title style={{ margin: 0 }} level={3}>Услуги</Title>
			<Row gutter={[12, 12]}>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='meeting_room' />
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='podium'/>
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='shower'/>
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='smoking_rooms' />
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='local_cafe' />
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='keyboard' />
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='24mp'/>
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='wifi' />
				</Col>
				<Col span={6} lg={6} sm={12} xs={12}>
					<SuperAdvantage advantage='print' />
				</Col>

			</Row>

		</Space>
	);
};

export default WorkspaceServices;
