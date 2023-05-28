import * as React from 'react';
import { Col, Pagination, Row } from 'antd';
import WorkspaceCard from '../WorkspaceCard/WorkspaceCard';
import { useAppSelector, useGetWorkspacesQuery } from '../../redux';
import { useState } from 'react';

const WorkspaceList: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const onPaginationChange = (_page: number, _pageSize: number) => {
		setPage(_page);
		setPageSize(_pageSize);
	};
	const filterState = useAppSelector((state) => state.searchFilterReducer);
	const { data } = useGetWorkspacesQuery({ size: pageSize, page, ...filterState });

	const workspaces = data?.data.items ?? [];

	return (
		<Row gutter={[0, 24]}>
			{workspaces.map(ws => {
				return (
					<Col span={24} key={ws.id}>
						<WorkspaceCard workspace={ws}/>
					</Col>
				);
			})}
			{ data?.data && <Col>
				<Pagination
					total={ data?.data.total }
					showTotal={ (total, range) => `${range[0]}-${range[1]} из ${total} элементов` }
					pageSizeOptions={[3, 5, 10]}
					pageSize={pageSize}
					current={page}
					onChange={onPaginationChange}
					showSizeChanger
				/>
			</Col> }
		</Row>
	);
};

export default WorkspaceList;
