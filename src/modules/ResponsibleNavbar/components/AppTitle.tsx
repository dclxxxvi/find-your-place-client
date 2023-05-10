import * as React from 'react';
import Typography from 'antd/es/typography';
import { useNavigate } from 'react-router-dom';

const AppTitle: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Typography.Title
			style={{ cursor: 'pointer', margin: 0 }}
			onClick={() => navigate('/')}
			level={2}
		>
			Find your place
		</Typography.Title>
	);
};

export default React.memo(AppTitle);
