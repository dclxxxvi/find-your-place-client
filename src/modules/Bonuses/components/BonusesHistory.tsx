import * as React from 'react';
import { useGetTransactionsQuery } from '../../../redux';
import { useState } from 'react';
import { Col, Divider, Pagination, Row, Skeleton, Space } from 'antd';
import Typography from 'antd/es/typography';

const BonusesHistory: React.FC = () => {
	const [page, setPage] = useState(1);

	const onPaginationChange = (_page: number) => {
		setPage(_page);
	};

	const { data, isLoading } = useGetTransactionsQuery({ size: 5, page });

	const bonuses = data?.data?.items ?? [];

	if (isLoading) {
		return <Skeleton active title={false}/>;
	}

	if (!bonuses.length && !isLoading) {
		return <Typography.Text>История пополнений пуста</Typography.Text>;
	}

	return (
		<Row gutter={[16, 16]}>
			{bonuses.map(({ id, amount, description }) => {
				return (
					<Col span={24} key={id}>
						<Space direction='vertical' style={{ width: '100%' }} size={'middle'}>
							<Space style={{ width: '100%' }}>
								<Typography.Title level={5} style={{ margin: 0 }}>{amount} рублей</Typography.Title>
								<Typography.Text style={{ margin: 0 }}>{description}</Typography.Text>
							</Space>
							<Divider style={{ margin: 0 }}/>
						</Space>
					</Col>
				);
			})}
			<Col>
				<Pagination
					total={ data?.data.total }
					showTotal={ (total, range) => `${range[0]}-${range[1]} из ${total} элементов` }
					current={page}
					onChange={onPaginationChange}
					showSizeChanger
					hideOnSinglePage
				/>
			</Col>
		</Row>
	);
};

export default BonusesHistory;
