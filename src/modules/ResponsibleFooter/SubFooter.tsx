import * as React from 'react';
import { PageWrapper } from '../../components';
import { Col, Row, Typography } from 'antd';
import AppTitle from '../ResponsibleNavbar/components/AppTitleLogo';
import { Content } from 'antd/es/layout/layout';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { blue } from '@ant-design/colors';
import { useAppSelector } from '../../redux';

const SubFooter: React.FC = () => {
	const breakpoint = useBreakpoint(true);

	const isSmall = (breakpoint.xs || breakpoint.sm) !== breakpoint.lg;
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	return (
		<Content>
			<PageWrapper>
				<Row justify={'space-between'} align='middle'>
					<Col xs={24} sm={24} md={9} lg={10} xl={9}>
						<Row>
							<AppTitle />
						</Row>
					</Col>
					<Col xs={24} sm={24} md={8} lg={7} xl={7}>
						<Row justify={'center'}>
							<Typography.Title level={5} style={{ margin: 0, color: isDarkMode ? '#FFFFFF' : blue[9] }}>
							2023 Все права защищены
							</Typography.Title>

						</Row>
					</Col>
					<Col xs={24} sm={24} md={7} lg={7}>
						<Row justify={isSmall ? 'center' : 'end'}>
							<Typography.Title level={5} style={{ margin: 0, color: isDarkMode ? '#FFFFFF' : blue[9] }}>
						+ 7 900 800 32 12
							</Typography.Title>
						</Row>
					</Col>
				</Row>
			</PageWrapper>
		</Content>
	);
};

export default SubFooter;
