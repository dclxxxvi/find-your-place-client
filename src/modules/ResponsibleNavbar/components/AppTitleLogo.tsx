import * as React from 'react';
import Typography from 'antd/es/typography';
import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { useAppSelector } from '../../../redux';

const AppTitleLogo: React.FC = () => {
	const navigate = useNavigate();
	const isDarkMode = useAppSelector(state => state.themeReducer.isDarkTheme);
	const lightColor = 'linear-gradient(278.07deg, #002766 0%, #096DD9 98.45%)';
	const darkColor = 'linear-gradient(278.07deg, #E6F7FF 0%, #40A9FF 98.45%)';
	const logoStyles = {
		cursor: 'pointer',
		margin: 0,
		backgroundImage: isDarkMode ? darkColor : lightColor,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
	};
	return (
		<Space align='center'>
			<LogoIcon/>
			<Typography.Title
				style={logoStyles}
				onClick={() => navigate('/')}
				level={2}
			>
			Find your place
			</Typography.Title>
		</Space>
	);
};

export default React.memo(AppTitleLogo);
