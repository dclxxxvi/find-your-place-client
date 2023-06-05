import * as React from 'react';
import { Rate, Space } from 'antd';
import Typography from 'antd/es/typography';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

interface Props {
	rating: number;
	commentsCount?: number;
}

const RatingField: React.FC<Props> = ({ rating, commentsCount }) => {
	const { xs } = useBreakpoint(true);
	return (
		<Space direction={xs ? 'horizontal' : 'vertical'} align={'end'} size={'small'}>
			<Rate allowHalf defaultValue={rating} disabled></Rate>
			<Typography.Text type="secondary">
				{`${commentsCount || 'Нет'} отзывов`}
			</Typography.Text>
		</Space>
	);
};

export default React.memo(RatingField);
