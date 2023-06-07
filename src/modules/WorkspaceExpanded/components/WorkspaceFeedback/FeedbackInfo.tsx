import * as React from 'react';
import { Card, Col, Progress, Rate, Row, Space, Typography } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { useCallback } from 'react';
import { getFeedbackPluralForm } from './consts';
import _ from 'lodash';

const renderProgressLine = (number: number, percent: number) => {
	return (
		<div key={number} style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'end',
		}}>
			{number}
			<Progress percent={percent} style={{ marginLeft: '10px', marginBottom: 0 }}/>
		</div>
	);
};

interface Props {
	rating: number;
	feedbackCount: number;
	ratingsCounter: number[];
}

const FeedbackInfo: React.FC<Props> = ({ rating, feedbackCount, ratingsCounter }) => {
	const { xs } = useBreakpoint(true);

	const getRatingPercent = useCallback((number: number) => {
		return Math.floor(ratingsCounter[number - 1] / feedbackCount * 100);
	}, [ratingsCounter, feedbackCount]);

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
								{feedbackCount} {getFeedbackPluralForm(feedbackCount)}
							</Typography.Paragraph>
						</Space>
					</Row>

				</Col>
				<Col span={xs ? 24 : 11}>
					<Space direction='vertical' style={{ width: '100%' }}>
						{_.reverse(
							Array.from({ length: 5 })
								.map((__, index) => {
									return renderProgressLine(index + 1, getRatingPercent(index + 1));
								}),
						)}
					</Space>
				</Col>
			</Row>
		</Card>
	);
};

export default FeedbackInfo;
