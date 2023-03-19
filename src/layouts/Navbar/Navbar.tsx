import * as React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsibleNavbar from '../../modules/ResponsibleNavbar';

const Navbar: React.FC = () => {
	return (
		<>
			<ResponsibleNavbar />
			<Outlet />
		</>
	);
};

export default Navbar;
