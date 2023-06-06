import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import PersonalCabinetMenu from '../../modules/PersonalCabinetMenu';
import { Layout, Space } from 'antd';
import { PageWrapper } from '../../components';

const PersonalCabinetLayout: React.FC = () => {
	return (
		<PageWrapper marginTop={80} marginBottom={100}>
			<Layout>
				<Space size={48} align={'start'}>
					<Sider breakpoint={'md'} collapsedWidth={0}>
						<PersonalCabinetMenu />
					</Sider>
					<Content>
						<Outlet />
					</Content>
				</Space>
			</Layout>
		</PageWrapper>
	);
};

export default PersonalCabinetLayout;
