import * as React from 'react';
import { Outlet } from 'react-router-dom';
import SearchFilter from '../../modules/SearchFilter';
import PageWrapper from '../../components/Wrapper/PageWrapper';

const GlobalSearchFilter: React.FC = () => {
	return (
		<>
			<PageWrapper marginBottom={16} marginTop={16}>
				<SearchFilter />
			</PageWrapper>
			<Outlet />
		</>
	);
};

export default GlobalSearchFilter;
