import * as React from 'react';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';
import Title from 'antd/es/typography/Title';
import { Col, Row, Space } from 'antd';
import { type ITariff } from '../../../types';
import Tariff from './Tariff/Tariff';

interface Props {
	tariffs?: ITariff[];
}

const WorkspaceTariffs: React.FC<Props> = ({ tariffs }) => {
	return (
		<Space id={EAnchorTabs.TARIFFS} direction={'vertical'} size={'large'} style={{ width: '100%' }}>
			<Title style={{ margin: 0 }} level={3}>{EAnchorTabsLabels.TARIFFS}</Title>
			<Row gutter={[24, 24]}>
				{tariffs?.map((tariff) => {
					return (
						<Col key={tariff.id} span={6} xs={24} sm={12} md={6} xl={6} xxl={4}>
							<Tariff tariff={tariff} />
						</Col>
					);
				})}
			</Row>
		</Space>
	);
};

export default WorkspaceTariffs;
