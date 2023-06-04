import * as React from 'react';
import { Col, Image, Row, Typography } from 'antd';

interface ImportanceBlockProps {
	image: string;
	title: string;
	paragraph: string;
	rowRevers: boolean;
}
const ImportanceBlock: React.FC <ImportanceBlockProps> = ({ image, title, rowRevers, paragraph }) => {
	return (
		<Row justify='space-between' style={{ flexDirection: rowRevers ? 'row-reverse' : 'row' }} align='middle'>
			<Col sm={24} md={10}>
				<Typography.Title level={3} style={{ marginTop: 0 }}>
					{title}
				</Typography.Title>
				<Typography.Paragraph style={{ lineHeight: '25px' }}>
					{paragraph}
				</Typography.Paragraph>
			</Col>
			<Col sm={24} md={10}>
				<Image
					src={image}
					alt={image}
					width={'100%'}
					style={{ boxShadow: '4px 4px 4px #BFBFBF', borderRadius: '5px' }}
				/>
			</Col>
		</Row>
	);
};

export default ImportanceBlock;
