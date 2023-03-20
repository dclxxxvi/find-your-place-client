import * as React from 'react';
import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { type ReactNode } from 'react';

interface Props {
	title?: string;
	breadcrumbs?: ReactNode;
}

const PageHeader: React.FC<Props> = ({ title, breadcrumbs }) => {
	return (
		<Row style={{ marginTop: 16, marginBottom: 16 }}>
			<Col>
				{ breadcrumbs !== undefined && <Row>
					{ breadcrumbs }
				</Row> }
				{ title !== undefined && <Row>
					<Title level={ 3 }>{ title }</Title>
				</Row> }
			</Col>
		</Row>
	);
};

export default PageHeader;
