import * as React from 'react';
import { Menu, type MenuProps } from 'antd';
import { useState } from 'react';
import { getCurrentPagePath, menuItems } from './consts';
import { useLocation, useNavigate } from 'react-router-dom';
import { type PersonalCabinetRoutes } from '../../router/routes';

const PersonalCabinetMenu: React.FC = () => {
	const location = useLocation();
	const [selected, setSelected] = useState<PersonalCabinetRoutes>(getCurrentPagePath(location));
	const navigate = useNavigate();

	const handleMenuItemClick: MenuProps['onClick'] = (e) => {
		setSelected(e.key as PersonalCabinetRoutes);
		navigate(e.key);
	};

	return (
		<Menu
			onClick={handleMenuItemClick}
			defaultSelectedKeys={[selected]}
			items={menuItems}
		/>
	);
};

export default React.memo(PersonalCabinetMenu);
