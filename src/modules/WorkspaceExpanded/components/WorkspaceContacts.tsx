import * as React from 'react';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';
import Title from 'antd/es/typography/Title';
import { Col, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import PhoneNumber from '../../WorkspaceCard/components/PhoneNumber';

interface Props {
	siteUrl?: string;
	phoneNumber?: string;
}

const WorkspaceContacts: React.FC<Props> = ({ phoneNumber, siteUrl }) => {
	return (
		<Space id={EAnchorTabs.CONTACTS} direction={'vertical'} size={'large'} style={{ width: '100%' }}>
			<Title style={{ margin: 0 }} level={3}>{EAnchorTabsLabels.CONTACTS}</Title>
			<Row gutter={[24, 24]}>
				{ phoneNumber && <Col span={ 12 } xs={ 24 } sm={ 12 } md={ 6 } xxl={ 4 }>
					<Space direction={ 'vertical' }>
						<Typography.Title level={ 5 } style={ { margin: 0 } }>Номер телефона</Typography.Title>
						<PhoneNumber phoneNumber={ phoneNumber }/>
					</Space>
				</Col> }
				<Col span={12} xs={24} sm={12} md={6} xxl={4}>
					<Space direction={'vertical'}>
						<Typography.Title level={5} style={{ margin: 0 }}>Сайт</Typography.Title>
						<Typography.Text>{siteUrl || 'Не указан'}</Typography.Text>
					</Space>
				</Col>
			</Row>
		</Space>
	);
};

export default WorkspaceContacts;
