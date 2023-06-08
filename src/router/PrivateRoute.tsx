import React, { useEffect } from 'react';
import { useGetUserQuery } from '../redux';
import { Navigate } from 'react-router-dom';
import { notification } from 'antd';
import { type PropsWithChildren } from 'react';

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
	const { data: userData, isLoading } = useGetUserQuery(null);

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (!userData?.data?.username) {
			notification.error({
				message: 'Ошибка доступа',
				description: 'Для перехода необходимо авторизоваться',
			});
		}
	}, [userData, isLoading]);

	if (!userData?.data?.username && !isLoading) {
		return <Navigate to={'../'} />;
	}

	return <>{ children }</>;
};

export default React.memo(PrivateRoute);
