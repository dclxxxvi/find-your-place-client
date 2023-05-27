import * as React from 'react';
import { Card, Col, Rate, Row, Space, Typography } from 'antd';

interface Props {
	rating: number;
	feedbackCount: number;

}

const FeedbackInfo: React.FC<Props> = ({ rating, feedbackCount }) => {
	const getPluralForm = (count: number): string => {
		if (count % 10 === 1 && count !== 11) {
			return 'отзыв';
		} else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
			return 'отзыва';
		} else {
			return 'отзывов';
		}
	};
	return (
		<Card style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
			<Row justify='center'>
				<Col>
					<Space direction='vertical' align='center'>
						<Typography.Title level={2} style={{ margin: '0' }}>
							{rating}
						</Typography.Title>
						<Rate allowHalf defaultValue={rating} disabled></Rate>
						<Typography.Paragraph style={{ margin: '0' }}>
							{feedbackCount} {getPluralForm(feedbackCount)}
						</Typography.Paragraph>
					</Space>
				</Col>
				<Col>

				</Col>
			</Row>
		</Card>
	);
};

export default FeedbackInfo;
