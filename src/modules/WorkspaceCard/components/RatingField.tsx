import * as React from 'react';
import { Rate, Space } from 'antd';
import Typography from 'antd/es/typography';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { getFeedbackPluralForm } from '../../WorkspaceExpanded/components/WorkspaceFeedback/consts';

interface Props {
	rating: number;
	commentsCount?: number;
	isNextLine?: boolean;
}

const RatingField: React.FC<Props> = ({ rating, commentsCount, isNextLine }) => {
	const { xs } = useBreakpoint(true);
	return (
		<Space direction={(xs || isNextLine) ? 'horizontal' : 'vertical'} align={'end'} size={'small'}>
			<Rate allowHalf defaultValue={rating} disabled></Rate>
			<Typography.Text type="secondary">
				{
					commentsCount
						? <>{commentsCount} {getFeedbackPluralForm(commentsCount)}</>
						: <>Нет отзывов</>
				}
			</Typography.Text>
		</Space>
	);
};

export default React.memo(RatingField);
