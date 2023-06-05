import { theme, type ThemeConfig } from 'antd';
import { commonTheme } from './common.theme';

export const darkTheme: ThemeConfig = {
	...commonTheme,
	algorithm: theme.darkAlgorithm,
	token: {
		...commonTheme.token,
		colorBgLayout: '#000000',
		colorLink: '#FFFFFF',
		colorLinkHover: '#0958d9',
	},
	components: {
		...commonTheme.components,
	},
};
