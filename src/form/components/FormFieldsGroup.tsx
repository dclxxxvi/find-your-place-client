import * as React from 'react';
import { Divider, Row } from 'antd';
import { type PropsWithChildren } from 'react';
import Title from 'antd/es/typography/Title';

interface Props {
	title?: string;
}

const FormFieldsGroup: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
	return (
		<Row>
			{ title !== undefined && <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>{ title }</Title> }
			{children}
			<Divider style={{ marginTop: 32, marginBottom: 32 }} />
		</Row>
	);
};

export default FormFieldsGroup;
