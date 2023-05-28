import * as React from 'react';
import { Button, Col, Input, Row } from 'antd';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { useSearchFilter } from './hooks/useSearchFilter';
import { useDictionaries } from '../../hooks';

interface Props {
	isGlobal?: boolean;
}

const SearchFilterDesktop: React.FC<Props> = ({ isGlobal }) => {
	const {
		filterValues: { params, search, format, cost },
		handleSelectChange,
		handleMultipleSelectChange,
		handleSearchInputChange,
	} = useSearchFilter();

	const { isLoading, parametersDictionary } = useDictionaries();

	return (
		<Row gutter={[10, 20]}>
			<Col xxl={5} lg={4} md={5}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('additional')}
					dictionary={parametersDictionary[0]?.dictionary}
					initialValue={params}
					placeholder={parametersDictionary[0]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }} />
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('features')}
					dictionary={parametersDictionary[1]?.dictionary}
					initialValue={format}
					placeholder={parametersDictionary[1]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }}/>
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('rooms')}
					dictionary={parametersDictionary[2]?.dictionary}
					initialValue={cost}
					placeholder={parametersDictionary[2]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }}/>
			</Col>
			{ isGlobal
				? <Col xxl={10} lg={10} md={10}>
					<Input
						value={search}
						onChange={handleSearchInputChange}
						placeholder={'Введите параметры поиска...'}/>
				</Col>
				: <Col xxl={13} lg={14} md={13}>
					<Input
						value={search}
						onChange={handleSearchInputChange}
						placeholder={'Введите параметры поиска...'}/>
				</Col>
			}
			{ isGlobal &&
				<Col xxl={3} lg={4}>
					<Button type={'primary'} shape={'default'} block={true}>
						Найти место
					</Button>
				</Col>
			}
		</Row>
	);
};

export default SearchFilterDesktop;
