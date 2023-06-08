import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import PersonalCabinetMenu from '../../modules/PersonalCabinetMenu';
import { Col, Layout, Row } from 'antd';
import { PageWrapper } from '../../components';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

const PersonalCabinetLayout: React.FC = () => {
	const breakpoint = useBreakpoint();

	return (
		<PageWrapper marginTop={breakpoint.lg ? 80 : 20} marginBottom={100}>
			<Layout>
				<Row gutter={[48, 24]}>
					<Col xs={24} sm={24} md={24} lg={6}>
						<PersonalCabinetMenu />
					</Col>
					<Col xs={24} sm={24} md={24} lg={18}>
						<Content>
							<Outlet />
						</Content>
					</Col>
				</Row>
			</Layout>
		</PageWrapper>
	);
};

export default PersonalCabinetLayout;
