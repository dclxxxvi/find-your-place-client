import * as React from 'react';
import { type FC, type ReactNode, Suspense } from 'react';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Spin } from 'antd';

interface Props {
	Desktop: React.LazyExoticComponent<FC>;
	Mobile: React.LazyExoticComponent<FC>;
	fallback?: ReactNode;
}

const MobileDesktopSplitter: React.FC<Props> = ({ Desktop, Mobile, fallback = <Spin />, ...rest }) => {
	const { sm } = useBreakpoint();
	return (
		<Suspense fallback={fallback}>
			{sm ? <Desktop {...rest} /> : <Mobile {...rest}/> }
		</Suspense>
	);
};

export default MobileDesktopSplitter;
