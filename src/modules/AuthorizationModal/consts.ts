import { type TabsProps } from 'antd';

export enum TabKeys {
	LOGIN = 'login',
	REGISTRATION = 'registration',
}

export enum TabLabels {
	LOGIN = 'Вход',
	REGISTRATION = 'Регистрация',
}

export const tabItems: TabsProps['items'] = [
	{
		key: TabKeys.LOGIN,
		label: TabLabels.LOGIN,
	},
	{
		key: TabKeys.REGISTRATION,
		label: TabLabels.REGISTRATION,
	},
];
