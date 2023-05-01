import * as React from 'react';
import MobileDesktopSplitter from '../../components/MobileDesktopSplitter/MobileDesktopSplitter';

const Desktop = React.lazy(async() => await import('./SearchFilterDesktop'));
const Mobile = React.lazy(async() => await import('./SearchFilterMobile'));

const SearchFilter: React.FC = () => {
	return <MobileDesktopSplitter Desktop={Desktop} Mobile={Mobile} />;
};

export default SearchFilter;
