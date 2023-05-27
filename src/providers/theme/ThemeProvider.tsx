import * as React from 'react';
import { type PropsWithChildren } from 'react';
import { ConfigProvider, theme } from 'antd';
import { useAppSelector } from '../../redux';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	return (
		<ConfigProvider theme={{
			algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
			token: {
				colorBgLayout: isDarkMode ? '#000000' : '#FFFFFF',
			},
		}}>
			{children}
		</ConfigProvider>
	);
};

export default React.memo(ThemeProvider);
