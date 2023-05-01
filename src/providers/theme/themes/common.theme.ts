import { theme, type ThemeConfig } from 'antd';
import { geekblue } from '@ant-design/colors';

export const commonTheme: ThemeConfig = {
	algorithm: theme.defaultAlgorithm,
	token: {
		colorPrimary: geekblue[4],
	},
	components: {
		Card: {

		},
		Rate: {
			colorBgBase: 'red',
			colorBgContainer: 'red',
		},
	},
};
