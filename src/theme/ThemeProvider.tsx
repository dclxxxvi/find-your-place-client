import * as React from 'react';
import { type PropsWithChildren, useMemo } from 'react';
import { ConfigProvider, theme } from 'antd';
import { useAppSelector } from '../redux';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	const { defaultAlgorithm, darkAlgorithm } = theme;

	const algorithm = useMemo(() => {
		return isDarkMode ? darkAlgorithm : defaultAlgorithm;
	}, [isDarkMode, darkAlgorithm, defaultAlgorithm]);

	return (
		<ConfigProvider theme={{ algorithm }}>
			{children}
		</ConfigProvider>
	);
};

export default React.memo(ThemeProvider);
