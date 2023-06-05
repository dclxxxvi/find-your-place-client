import * as React from 'react';
import { Card, Col, Progress, Rate, Row, Space, Typography } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

interface Props {
	rating: number;
	feedbackCount: number;
	ratingsCounter: any[][number];
}

const FeedbackInfo: React.FC<Props> = ({ rating, feedbackCount, ratingsCounter }) => {
	const { xs } = useBreakpoint(true);
	const getPluralForm = (count: number): string => {
		if (count % 10 === 1 && count !== 11) {
			return 'отзыв';
		} else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
			return 'отзыва';
		} else {
			return 'отзывов';
		}
	};
	const getRatingPercent = (number: number) => {
		return Math.floor(ratingsCounter[number - 1] / ratingsCounter[5] * 100);
	};
	const getProgressLine = (number: number) => {
		return (
			<div style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'end',
			}}>
				{number}
				<Progress percent={getRatingPercent(number)} style={{ marginLeft: '10px', marginBottom: 0 }}/>
			</div>
		);
	};
	return (
		<Card>
			<Row justify={'space-between'} align='middle'>
				<Col span={xs ? 24 : 12}>
					<Row justify={xs ? 'center' : 'space-between'}>
						<Space direction='vertical' align='center' >
							<Typography.Title level={2} style={{ margin: '0' }}>
								{rating}
							</Typography.Title>
							<Rate allowHalf defaultValue={rating} disabled></Rate>
							<Typography.Paragraph style={{ margin: '0' }}>
								{feedbackCount} {getPluralForm(feedbackCount)}
							</Typography.Paragraph>
						</Space>
					</Row>

				</Col>
				<Col span={xs ? 24 : 11}>
					<Space direction='vertical' style={{ width: '100%' }}>
						{getProgressLine(5)}
						{getProgressLine(4)}
						{getProgressLine(3)}
						{getProgressLine(2)}
						{getProgressLine(1)}
					</Space>

				</Col>
			</Row>
		</Card>
	);
};

export default FeedbackInfo;
