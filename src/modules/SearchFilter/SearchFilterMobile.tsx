import * as React from 'react';
import { Button, Col, Input, Row } from 'antd';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { useSearchFilter } from './hooks/useSearchFilter';
import { useDictionaries } from '../../hooks';

interface Props {
	isGlobal?: boolean;
}

const SearchFilterMobile: React.FC<Props> = ({ isGlobal }) => {
	const {
		filterValues: { params, search, format, cost },
		handleSelectChange,
		handleMultipleSelectChange,
		handleSearchInputChange,
	} = useSearchFilter();

	const { isLoading, parametersDictionary } = useDictionaries();

	return (
		<Row gutter={[10, 10]} style={{ marginTop: '10px' }}>
			{ isGlobal
				? <Col md={9} sm={18} xs={15}>
					<Input
						value={search}
						onChange={handleSearchInputChange}
						placeholder={'Введите параметры поиска...'}/>
				</Col>
				: <Col md={13} sm={24} xs={24}>
					<Input
						value={search}
						onChange={handleSearchInputChange}
						placeholder={'Введите параметры поиска...'}/>
				</Col>
			}
			{ isGlobal &&
			<Col md={4} sm={6} xs={9}>
				<Button type={'primary'} shape={'default'} block={true}>
					Найти место
				</Button>
			</Col>
			}
			<Col span={10}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('additional')}
					dictionary={parametersDictionary[0]?.dictionary}
					initialValue={params}
					placeholder={parametersDictionary[0]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }} />
			</Col>
			<Col span={7}>
				<BaseTypeSelect
					handleChange={handleSelectChange('features')}
					dictionary={parametersDictionary[1]?.dictionary}
					initialValue={format}
					placeholder={parametersDictionary[1]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }}/>
			</Col>
			<Col span={7}>
				<BaseTypeSelect
					handleChange={handleSelectChange('rooms')}
					dictionary={parametersDictionary[2]?.dictionary}
					initialValue={cost}
					placeholder={parametersDictionary[2]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }}/>
			</Col>
		</Row>
	);
};

export default SearchFilterMobile;
