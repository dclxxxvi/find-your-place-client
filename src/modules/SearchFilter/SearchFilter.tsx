import * as React from 'react';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Suspense } from 'react';
import { Spin } from 'antd';

const Desktop = React.lazy(async() => await import('./SearchFilterDesktop'));
const Mobile = React.lazy(async() => await import('./SearchFilterMobile'));

interface Props {
	isGlobal?: boolean;
}

const SearchFilter: React.FC<Props> = (props) => {
	const { md } = useBreakpoint(true);
	return (
		<Suspense fallback={<Spin />}> {/* TODO: в fallback правильнее передавать skeleton */}
			{md ? <Desktop {...props} /> : <Mobile {...props}/> }
		</Suspense>
	);
};

export default SearchFilter;
