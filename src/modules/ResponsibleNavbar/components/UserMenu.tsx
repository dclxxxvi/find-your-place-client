import * as React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PersonalCabinetRoutes } from '../../../router/routes';
import AuthorizationModal from '../../AuthorizationModal/AuthorizationModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetUserQuery } from '../../../redux';

const UserMenu: React.FC = () => {
	const { isLoading, data, isFetching } = useGetUserQuery(null);
	const navigate = useNavigate();
	const [authorizationModalOpen, setAuthorizationModalOpen] = useState(false);
	const handleAuthorizationModalOpen = (open: boolean) => () => setAuthorizationModalOpen(open);

	if (data) {
		return <Button
			shape={'circle'}
			icon={<UserOutlined />}
			onClick={() => navigate(`${PersonalCabinetRoutes.PROFILE}/${PersonalCabinetRoutes.USER_DATA}`)}
		/>;
	}

	if (isLoading || isFetching) {
		return <Button
			loading
			shape={'circle'}
			icon={<UserOutlined />}
		/>;
	}

	return (
		<>
			<Button onClick={handleAuthorizationModalOpen(true)}>
			Авторизация
			</Button>
			<AuthorizationModal
				open={authorizationModalOpen}
				handleClose={handleAuthorizationModalOpen(false)}
			/>
		</>
	);
};

export default UserMenu;
