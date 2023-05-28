import * as React from 'react';
import { type PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { useAppSelector } from '../../redux';
import { darkTheme, lightTheme } from './themes';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	return (
		<ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
			{children}
		</ConfigProvider>
	);
};

export default React.memo(ThemeProvider);
