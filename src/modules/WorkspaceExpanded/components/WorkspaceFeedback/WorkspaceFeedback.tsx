import * as React from 'react';
import { EAnchorTabs } from '../../consts';
import Title from 'antd/es/typography/Title';
import { Button, Col, Row, Space } from 'antd';
import FeedbackInfo from './FeedbackInfo';
import FeedbackComment from './FeedbackComment';
import { type IWorkspace } from '../../../../types';
import FeedbackModal from '../../../FeedbackModal';
import { useState } from 'react';

interface Props {
	workspace: IWorkspace;
}

const WorkspaceFeedback: React.FC<Props> = ({ workspace }) => {
	const [open, setOpen] = useState(false);
	const ratingsCounter = [0, 0, 0, 0, 0, 0];
	const openFeedbackModal = () => setOpen(true);
	const closeFeedbackModal = () => setOpen(false);

	const getRatingCounter = () => {
		workspace.comments.forEach((comment) => {
			if (comment.rating === 1) {
				ratingsCounter[0] += 1;
			}
			if (comment.rating === 2) {
				ratingsCounter[1] += 1;
			}
			if (comment.rating === 3) {
				ratingsCounter[2] += 1;
			}
			if (comment.rating === 4) {
				ratingsCounter[3] += 1;
			}
			if (comment.rating === 5) {
				ratingsCounter[4] += 1;
			}
			ratingsCounter[5] += 1;
		});
		return ratingsCounter;
	};
	return (
		<Space id={EAnchorTabs.FEEDBACK} direction={'vertical'} size={'large'} style={{ width: '100%' }}>
			<Row align='stretch'>
				<Space size={'large'}>
					<Title style={{ margin: 0 }} level={3}>Отзывы</Title>
					<Button type='primary' style={{ marginLeft: '5px' }} onClick={openFeedbackModal}>
						Добавить отзыв
					</Button>
				</Space>
			</Row>
			<Row gutter={[24, 24]}>
				{(!workspace.comments || workspace.comments.length === 0) &&
					<Col>
						<Title level={5}>Нет отзывов</Title>
					</Col>
				}
				{ (workspace?.rating && workspace?.comments?.length) &&
				<Col xs={ 24 } sm={ 24 } md={ 24 } lg={ 10 } xxl={8}>
					<FeedbackInfo
						rating={ workspace?.rating }
						feedbackCount={ workspace.comments?.length }
						ratingsCounter={getRatingCounter()}/>
				</Col>
				}
				{ (workspace?.comments && workspace?.comments?.length > 0) &&
					<Col xs={ 24 } sm={ 24 } md={ 24 } lg={ 14 } xxl={16}>
						<Space direction='vertical' size='large' style={ { width: '100%' } }>
							{ workspace?.comments.map((comment) => {
								return <FeedbackComment key={ comment.id } comment={ comment }/>;
							}) }
						</Space>
					</Col>
				}
			</Row>
			<FeedbackModal open={open} handleClose={closeFeedbackModal} workspace={workspace} />
		</Space>
	);
};

export default WorkspaceFeedback;
