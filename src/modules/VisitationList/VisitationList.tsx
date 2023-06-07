import * as React from 'react';
import { Card, Col, Pagination, Row, Skeleton } from 'antd';
import VisitationWorkspaceCard from '../WorkspaceCard/VisitationWorkspaceCard/VisitationWorkspaceCard';
import { useGetVisitationsQuery } from '../../redux';
import { useState } from 'react';
import Typography from 'antd/es/typography';

const VisitationList: React.FC = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const onPaginationChange = (_page: number, _pageSize: number) => {
		setPage(_page);
		setPageSize(_pageSize);
	};
	const { data, isLoading } = useGetVisitationsQuery({ size: pageSize, page });

	const visitations = data?.data.items ?? [];

	if (isLoading) {
		return <Card><Skeleton /></Card>;
	}

	if (!visitations.length && !isLoading) {
		return <Typography.Text>Ничего не найдено</Typography.Text>;
	}

	return (
		<Row gutter={[0, 24]}>
			{visitations.map(visitation => {
				return (
					<Col span={24} key={visitation.id}>
						<VisitationWorkspaceCard visitation={visitation}/>
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
				/>
			</Col>
		</Row>
	);
};

export default VisitationList;
