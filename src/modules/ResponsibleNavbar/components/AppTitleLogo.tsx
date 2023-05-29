import * as React from 'react';
import Typography from 'antd/es/typography';
import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const AppTitleLogo: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Space align='center'>
			<LogoIcon/>
			<Typography.Title
				style={{
					cursor: 'pointer',
					margin: 0,
					background: 'linear-gradient(278.07deg, #002766 0%, #096DD9 98.45%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
				}}
				onClick={() => navigate('/')}
				level={2}
			>
			Find your place
			</Typography.Title>
		</Space>
	);
};

export default React.memo(AppTitleLogo);
