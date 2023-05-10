import * as React from 'react';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { NavbarDesktop, NavbarMobile } from './index';

const ResponsibleNavbar: React.FC = () => {
	const { md } = useBreakpoint(true);
	if (md) {
		return <NavbarDesktop />;
	}
	return <NavbarMobile />;
};

export default ResponsibleNavbar;
