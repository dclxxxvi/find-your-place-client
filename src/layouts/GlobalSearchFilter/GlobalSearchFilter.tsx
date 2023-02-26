import * as React from 'react';
import { Outlet } from 'react-router-dom';

const GlobalSearchFilter: React.FC = () => {
	return (
		<div>
			Глобальный фильтр
			<Outlet />
		</div>
	);
};

export default GlobalSearchFilter;
