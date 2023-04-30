import * as React from 'react';
import { type PropsWithChildren, useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { useAppSelector } from '../../redux';
import { darkTheme, lightTheme } from './themes';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	const theme = useMemo(() => {
		return isDarkMode ? darkTheme : lightTheme;
	}, [isDarkMode]);

	return (
		<ConfigProvider theme={theme}>
			{children}
		</ConfigProvider>
	);
};

export default React.memo(ThemeProvider);
