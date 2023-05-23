import * as React from 'react';
import { PageWrapper } from '../../components';
import { Col, Row, Typography } from 'antd';
import AppTitle from '../../modules/ResponsibleNavbar/components/AppTitle';
import { Content } from 'antd/es/layout/layout';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

const SubFooter: React.FC = () => {
	const { xs } = useBreakpoint(true);
	return (
		<Content>
			<PageWrapper marginTop={16} marginBottom={16}>
				<Row justify={'space-between'} align={xs ? 'top' : 'middle'}>
					<Col xs={9} sm={8}>
						<Row>
							<AppTitle />
						</Row>
					</Col>
					<Col xs={15} sm={8}>
						<Row justify={xs ? 'end' : 'center'} >
							<Typography.Text>
							2023 Все права защищены
							</Typography.Text>

						</Row>
					</Col>
					<Col xs={12} sm={8} offset={xs ? 12 : 0}>
						<Row justify={'end'} >
							<Typography.Text>
						+ 7 900 800 32 12
							</Typography.Text>
						</Row>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default SubFooter;
