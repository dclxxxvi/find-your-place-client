import * as React from 'react';
import { Card, Col, Pagination, Row, Skeleton } from 'antd';
import WorkspaceCard from '../WorkspaceCard/WorkspaceCard';
import { useAppSelector, useGetWorkspacesQuery } from '../../redux';
import { useEffect, useState } from 'react';
import Typography from 'antd/es/typography';

const WorkspaceList: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const onPaginationChange = (_page: number, _pageSize: number) => {
		setPage(_page);
		setPageSize(_pageSize);
	};
	const filterState = useAppSelector((state) => state.searchFilterReducer);
	const { data, isLoading } = useGetWorkspacesQuery({ size: pageSize, page, ...filterState });

	const workspaces = data?.data.items ?? [];

	useEffect(() => {
		setPage(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterState]);

	if (isLoading) {
		return <Card><Skeleton /></Card>;
	}

	if (!workspaces.length && !isLoading) {
		return <Typography.Text>Ничего не найдено</Typography.Text>;
	}

	return (
		<Row gutter={[0, 24]}>
			{workspaces.map(ws => {
				return (
					<Col span={24} key={ws.id}>
						<WorkspaceCard workspace={ws}/>
					</Col>
				);
			})}
			<Col>
				<Pagination
					total={ data?.data.total }
					showTotal={ (total, range) => `${range[0]}-${range[1]} из ${total} элементов` }
					pageSizeOptions={[3, 5, 10]}
					pageSize={pageSize}
					current={page}
					onChange={onPaginationChange}
					showSizeChanger
					hideOnSinglePage
				/>
			</Col>
		</Row>
	);
};

export default WorkspaceList;
