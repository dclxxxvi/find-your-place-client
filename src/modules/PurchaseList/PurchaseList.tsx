import * as React from 'react';
import { Col, Pagination, Row } from 'antd';
import { useState } from 'react';
import { useGetVisitationsQuery } from '../../redux';
import Typography from 'antd/es/typography';
import PurchaseWorkspaceCard from '../WorkspaceCard/PurchaseWorkspaceCard/PurchaseWorkspaceCard';
import SkeletonCardList from '../../components/SkeletonCardList/SkeletonCardList';

const PurchaseList: React.FC = () => {
	// const [status, setStatus] = useState<string | undefined>();
	// const handleStatusChange = (value?: string) => setStatus(value);

	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const onPaginationChange = (_page: number, _pageSize: number) => {
		setPage(_page);
		setPageSize(_pageSize);
	};
	const { data, isLoading } = useGetVisitationsQuery({ size: pageSize, page });

	const visitations = data?.data.items ?? [];

	if (isLoading) {
		return <SkeletonCardList />;
	}

	if (!visitations.length && !isLoading) {
		return <Typography.Text>Ничего не найдено</Typography.Text>;
	}

	return (
		<Row gutter={[0, 24]}>
			{visitations.map(visitation => {
				return (
					<Col span={24} key={visitation.id}>
						<PurchaseWorkspaceCard visitation={visitation}/>
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

export default PurchaseList;
