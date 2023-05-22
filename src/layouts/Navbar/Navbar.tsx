import * as React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsibleNavbar from '../../modules/ResponsibleNavbar';
import Footer from '../Footer/Footer';

const Navbar: React.FC = () => {
	return (
		<>
			<ResponsibleNavbar />
			<Outlet />
			<Footer/>
		</>
	);
};

export default Navbar;
