import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { Button, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../components';

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Content>
			<PageWrapper marginTop={20} marginBottom={100}>
				<Row justify={'center'} align={'middle'} gutter={32}>
					<Col>
						<Title level={2}>404</Title>
					</Col>
					<Col>
						<Title level={5}>
								Страницы которую вы ищете не существует
						</Title>
					</Col>
				</Row>
				<Row justify={'center'}>
					<Button
						onClick={() => { navigate('/') } }
					>
							Вернуться на главную
					</Button>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default NotFound;
