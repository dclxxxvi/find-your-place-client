import * as React from 'react';
import { Card, Col, Row, Skeleton } from 'antd';

const SkeletonCardList: React.FC = () => {
	return (
		<Row gutter={[24, 24]}>
			{Array.from({ length: 5 }).map((_, index) => {
				return (
					<Col key={index} span={24}>
						<Card>
							<Skeleton active/>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
};

export default React.memo(SkeletonCardList);
