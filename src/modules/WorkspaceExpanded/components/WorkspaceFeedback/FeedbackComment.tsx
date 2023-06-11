import * as React from 'react';
import { Card, Col, Rate, Row, Space, Typography } from 'antd';
import { type IComment } from '../../../../types/IComment';
import { getFormattedDate } from '../../../WorkspaceCard/consts';
import dayjs from 'dayjs';

interface Props {
	comment: IComment;
}

const FeedbackComment: React.FC<Props> = ({ comment }) => {
	return (
		<Card>
			<Space direction='vertical' size={'large'} style={{ width: '100%' }}>
				<Row wrap={false} justify={'space-between'} style={{ alignItems: 'center' }}>
					<Col>
						{ comment?.user?.username && (
							<Typography.Title level={ 5 } style={ { margin: 0 } }>
								{ comment.user.username }
							</Typography.Title>
						) }
						<Rate allowHalf defaultValue={comment.rating} disabled></Rate>
					</Col>
					<Col>
						<Typography.Text>
							{getFormattedDate(dayjs(comment.created_at), 'year')}
						</Typography.Text>
					</Col>
				</Row>
				<Space direction={'vertical'} size={'small'}>
					<Typography.Title level={5} style={ { margin: 0 } }>
								Достоинства
					</Typography.Title>
					<Typography.Text>
						{comment.advantages}
					</Typography.Text>
				</Space>
				<Space direction={'vertical'} size={'small'}>
					<Typography.Title level={5} style={ { margin: 0 } }>
								Недостатки
					</Typography.Title>
					<Typography.Text>
						{comment.disadvantages}
					</Typography.Text>
				</Space>
				<Space direction={'vertical'} size={'small'}>
					<Typography.Title level={5} style={ { margin: 0 } }>
								Комментарий
					</Typography.Title>
					<Typography.Text>
						{comment.text}
					</Typography.Text>
				</Space>
			</Space>
		</Card>
	);
};

export default FeedbackComment;
