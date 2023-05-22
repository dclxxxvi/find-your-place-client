import * as React from 'react';
import { PageWrapper } from '../../components';
import { Col, Row, Typography } from 'antd';
import AppTitle from '../../modules/ResponsibleNavbar/components/AppTitle';
import { Content } from 'antd/es/layout/layout';

const SubFooter: React.FC = () => {
	return (
		<Content>
			<PageWrapper marginTop={16} marginBottom={16}>
				<Row justify={'space-between'} align={'middle'}>
					<Col>
						<AppTitle />
					</Col>
					<Col>
						<Typography.Text>
							2023 Все права защищены
						</Typography.Text>

					</Col>
					<Col>
						<Typography.Text>
						+ 7 900 800 32 12
						</Typography.Text>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default SubFooter;
