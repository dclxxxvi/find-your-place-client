import * as React from 'react';
import Title from 'antd/es/typography/Title';
import { Space } from 'antd';
import { useAppSelector, useGetWorkspacesQuery } from '../../../redux';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../router/routes';

const WorkspaceListHeader: React.FC = () => {
	const filterState = useAppSelector((state) => state.searchFilterReducer);
	const { data } = useGetWorkspacesQuery(filterState);
	const navigate = useNavigate();

	return (
		<Space size={'large'}>
			<Title style={{ margin: 0 }} level={5}>
				Найдено {data?.data?.total} мест(а)
			</Title>
			<Title style={{ margin: 0 }} level={5}>
				По популярности
			</Title>
			<Title
				style={{ margin: 0, cursor: 'pointer' }}
				level={5}
				onClick={() => navigate(AppRoutes.WORKSPACES_CARD)}
			>
				Показать на карте
			</Title>
		</Space>
	);
};

export default React.memo(WorkspaceListHeader);
