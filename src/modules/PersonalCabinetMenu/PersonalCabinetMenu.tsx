import * as React from 'react';
import { Menu, type MenuProps } from 'antd';
import { useState } from 'react';
import { menuItems } from './consts';
import { useNavigate } from 'react-router-dom';
import { PersonalCabinetRoutes } from '../../router/routes';

const PersonalCabinetMenu: React.FC = () => {
	const [selected, setSelected] = useState<PersonalCabinetRoutes>(PersonalCabinetRoutes.USER_DATA);
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
