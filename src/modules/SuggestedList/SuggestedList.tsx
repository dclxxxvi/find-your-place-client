import * as React from 'react';
import { useState } from 'react';
import { useGetUserWorkspacesQuery } from '../../redux';
import { Col, Pagination, Row } from 'antd';
import SuggestedWorkspaceCard from '../WorkspaceCard/SuggestedWorkspaceCard';

const SuggestedList: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const onPaginationChange = (_page: number, _pageSize: number) => {
		setPage(_page);
		setPageSize(_pageSize);
	};

	const { data } = useGetUserWorkspacesQuery({ size: pageSize, page });

	const workspaces = data?.data.items ?? [];

	return (
		<Row gutter={[0, 24]}>
			{workspaces.map(ws => {
				return (
					<Col span={24} key={ws.id}>
						<SuggestedWorkspaceCard workspace={ws}/>
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

export default SuggestedList;
