import * as React from 'react';
import { Switch, type SwitchProps } from 'antd';
import { toggleTheme as toggleThemeAction, useAppDispatch, useAppSelector } from '../../../redux';

interface Props extends Omit<SwitchProps, 'checked' | 'onChange'> {}

const ThemeSwitcher: React.FC<Props> = (
	{ checkedChildren = 'Dark', unCheckedChildren = 'Light', ...rest },
) => {
	const dispatch = useAppDispatch();
	const toggleTheme = () => dispatch(toggleThemeAction());

	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);

	return (
		<Switch
			checked={isDarkMode}
			onChange={toggleTheme}
			checkedChildren={checkedChildren}
			unCheckedChildren={unCheckedChildren}
			{...rest}
		/>
	);
};

export default ThemeSwitcher;
