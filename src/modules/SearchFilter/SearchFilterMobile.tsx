import * as React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { useSearchFilter } from './hooks/useSearchFilter';
import { useDictionaries } from '../../hooks';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';

interface Props {
	isGlobal?: boolean;
}

const SearchFilterMobile: React.FC<Props> = ({ isGlobal }) => {
	const {
		filterValues: { features, search, rooms, additional },
		handleMultipleSelectChange,
		handleSearchInputChange,
		navigateToWorkspacesPage,
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
				<Button type={'primary'} shape={'default'} block={true} onClick={navigateToWorkspacesPage}>
					Найти место
				</Button>
			</Col>
			}
			<Col span={10}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('additional')}
					dictionary={parametersDictionary[0]?.dictionary}
					initialValue={additional}
					placeholder={parametersDictionary[0]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }} />
			</Col>
			<Col span={7}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('features')}
					dictionary={parametersDictionary[1]?.dictionary}
					initialValue={features}
					placeholder={parametersDictionary[1]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }}/>
			</Col>
			<Col span={7}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('rooms')}
					dictionary={parametersDictionary[2]?.dictionary}
					initialValue={rooms}
					placeholder={parametersDictionary[2]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }}/>
			</Col>
		</Row>
	);
};

export default SearchFilterMobile;
