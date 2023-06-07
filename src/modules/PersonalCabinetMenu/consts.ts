import { type ItemType } from 'antd/es/menu/hooks/useItems';
import { PersonalCabinetRoutes } from '../../router/routes';
import { type Location } from 'react-router-dom';

export enum MenuLabels {
	PERSONAL_CABINET = 'Личный кабинет',
	USER_DATA = 'Мои данные',
	BONUSES = 'Мои бонусы',
	PURCHASES = 'Мои покупки',
	VISITATION_HISTORY = 'История посещений',
	SUGGESTED_PLACES = 'Предложенные места',
	QUIT = 'Выйти',
}

export const menuItems: ItemType[] = [
	{
		key: PersonalCabinetRoutes.PROFILE,
		label: MenuLabels.PERSONAL_CABINET,
		type: 'group',
		children: [
			{
				key: PersonalCabinetRoutes.USER_DATA,
				label: MenuLabels.USER_DATA,
			},
			{
				key: PersonalCabinetRoutes.BONUSES,
				label: MenuLabels.BONUSES,
			},
			{
				key: PersonalCabinetRoutes.PURCHASES,
				label: MenuLabels.PURCHASES,
			},
			{
				key: PersonalCabinetRoutes.VISITATION_HISTORY,
				label: MenuLabels.VISITATION_HISTORY,
			},
			{
				key: PersonalCabinetRoutes.SUGGESTED_PLACES,
				label: MenuLabels.SUGGESTED_PLACES,
			},
			{
				key: 'quit',
				label: MenuLabels.QUIT,
				danger: true,
			},
		],
	},
];

export const getCurrentPagePath = (location: Location) => location.pathname.split('/').pop() as PersonalCabinetRoutes;
