import { type ThemeConfig } from 'antd';
import { commonTheme } from './common.theme';

export const lightTheme: ThemeConfig = {
	...commonTheme,
	token: {
		...commonTheme.token,
		colorBgLayout: '#FFFFFF',
		colorLink: 'rgba(0, 0, 0, 0.88)',
		colorLinkHover: '#0958d9',
	},
	components: {
		...commonTheme.components,
	},
};
