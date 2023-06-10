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
			<Row>
				<Col span={18}>
					<Space direction='vertical'>
						{ comment?.user?.username &&
							<Typography.Title level={ 5 } style={ { marginTop: '0' } }>
								{ comment.user.username }
							</Typography.Title>
						}
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
							{comment.text}
						</Typography.Paragraph>
					</Space>
				</Col>
				<Col span={6} style={{ display: 'flex', justifyContent: 'end' }}>
					<Typography.Paragraph>
						{getFormattedDate(dayjs(comment.created_at))}
					</Typography.Paragraph>
				</Col>
			</Row>
		</Card>
	);
};

export default FeedbackComment;
