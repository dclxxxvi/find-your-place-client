import * as React from 'react';
import { Outlet } from 'react-router-dom';

const PersonalCabinetLayout: React.FC = () => {
	return (
		<div>
			Лэйаут личного кабинета
			<Outlet />
		</div>
	);
};

export default PersonalCabinetLayout;
