import * as React from 'react';
import { Switch } from 'antd';
import { toggleTheme as toggleThemeAction, useAppDispatch, useAppSelector } from '../../../redux';

const ThemeSwitcher: React.FC = () => {
	const dispatch = useAppDispatch();
	const toggleTheme = () => dispatch(toggleThemeAction());

	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	return (
		<Switch
			checked={isDarkMode}
			onChange={toggleTheme}
			checkedChildren="Dark"
			unCheckedChildren="Light"
		/>
	);
};

export default ThemeSwitcher;
