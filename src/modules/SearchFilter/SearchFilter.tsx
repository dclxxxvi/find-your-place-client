import * as React from 'react';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { SearchFilterDesktop, SearchFilterMobile } from './index';

interface Props {
	isGlobal?: boolean;
}

const SearchFilter: React.FC<Props> = (props) => {
	const { md } = useBreakpoint(true);
	if (md) {
		return <SearchFilterDesktop {...props} />;
	}
	return <SearchFilterMobile {...props}/>;
};

export default SearchFilter;
