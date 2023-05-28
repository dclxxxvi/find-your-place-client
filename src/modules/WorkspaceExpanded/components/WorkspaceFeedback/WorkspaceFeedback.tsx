import * as React from 'react';
import { AnchorTabs } from '../../consts';
import Title from 'antd/es/typography/Title';
import { Button, Col, Row, Space } from 'antd';
import FeedbackInfo from './FeedbackInfo';
import FeedbackComment from './FeedbackComment';

interface Props {
	feedback?: any;
}

const WorkspaceFeedback: React.FC<Props> = () => {
	const comment = {
		rating: 4.7,
		comment: 'Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий',
		advantages: 'Плюсы Плюсы Плюсы Плюсы Плюсы Плюсы Плюсы Плюсы Плюсы',
		disadvantages: 'Минусы Минусы Минусы Минусы Минусы Минусы Минусы',
		user: 'Пользователь',
	};
	return (
		<Space id={AnchorTabs.FEEDBACK} direction={'vertical'} size={'large'} style={{ width: '100%' }}>
			<Row align='stretch'>
				<Title style={{ margin: 0 }} level={3}>Отзывы</Title>
				<Button type='primary' style={{ marginLeft: '5px' }}>Добавить отзыв</Button>
			</Row>
			<Row gutter={[24, 24]}>
				<Col xs={24} sm={24} md={9} lg={6}>
					<FeedbackInfo rating={4.7} feedbackCount={50}/>
				</Col>
				<Col xs={24} sm={24} md={15} lg={18}>
					<Space direction='vertical' size='large' style={{ width: '100%' }}>
						<FeedbackComment comment={comment} />
						<FeedbackComment comment={comment} />
						<FeedbackComment comment={comment} />
						<FeedbackComment comment={comment} />
					</Space>
				</Col>
			</Row>
		</Space>

	);
};

export default WorkspaceFeedback;
