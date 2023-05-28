import { type ThemeConfig } from 'antd';
import { commonTheme } from './common.theme';

export const lightTheme: ThemeConfig = {
	...commonTheme,
	token: {
		...commonTheme.token,
		colorBgLayout: '#FFFFFF',
	},
	components: {
		...commonTheme.components,
	},
};
