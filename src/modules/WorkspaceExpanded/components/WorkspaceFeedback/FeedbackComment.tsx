import * as React from 'react';
import { Card, Col, Rate, Row, Space, Typography } from 'antd';

interface Props {
	comment: {
		rating: number;
		comment: string;
		advantages: string;
		disadvantages: string;
		user: string;
	};
}

const FeedbackComment: React.FC<Props> = ({ comment }) => {
	return (
		<Card style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', width: '100%' }}>
			<Row>
				<Col span={18}>
					<Space direction='vertical'>
						<Typography.Title level={5} style={{ marginTop: '0' }}>
							{comment.user}
						</Typography.Title>
						<Rate allowHalf defaultValue={comment.rating} disabled></Rate>
						<Typography.Title level={5}>
							Достоинства
						</Typography.Title>
						<Typography.Paragraph style={{ marginBottom: '0' }}>
							{comment.advantages}
						</Typography.Paragraph>
						<Typography.Title level={5}>
							Недостатки
						</Typography.Title>
						<Typography.Paragraph style={{ marginBottom: '0' }}>
							{comment.disadvantages}
						</Typography.Paragraph>
						<Typography.Title level={5}>
							Комментарий
						</Typography.Title>
						<Typography.Paragraph style={{ marginBottom: '0' }}>
							{comment.comment}
						</Typography.Paragraph>
					</Space>
				</Col>

				<Col span={6} style={{ display: 'flex', justifyContent: 'end' }}>
					<Typography.Paragraph>
		02.20.2021
					</Typography.Paragraph>
				</Col>

			</Row>

		</Card>
	);
};

export default FeedbackComment;
