import * as React from 'react';
import { Outlet } from 'react-router-dom';
import SearchFilter from '../../modules/SearchFilter';
import PageWrapper from '../../components/Wrapper/PageWrapper';
import { Divider } from 'antd';

const GlobalSearchFilter: React.FC = () => {
	return (
		<>
			<Divider style={{ margin: 0 }}/>
			<PageWrapper marginBottom={16} marginTop={16}>
				<SearchFilter isGlobal={true} />
			</PageWrapper>
			<Divider style={{ margin: 0 }}/>
			<Outlet />
		</>
	);
};

export default GlobalSearchFilter;
