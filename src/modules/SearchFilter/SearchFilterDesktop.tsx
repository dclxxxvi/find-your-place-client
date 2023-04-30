import * as React from 'react';
import { Col, Input, Row } from 'antd';
import { type IBaseType } from '../../types';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { useSearchFilter } from './hooks/useSearchFilter';

const dictMocks: IBaseType[] = [
	{ id: '1', code: 'ExampleCode1', name: 'Первый пример' },
	{ id: '2', code: 'ExampleCode2', name: 'Второй пример' },
	{ id: '3', code: 'ExampleCode3', name: 'Третий пример' },
	{ id: '4', code: 'ExampleCode4', name: 'Четвертый пример' },
	{ id: '5', code: 'ExampleCode5', name: 'Пятый пример' },
	{ id: '6', code: 'ExampleCode6', name: 'Шестой пример' },
] as IBaseType[];

const SearchFilterDesktop: React.FC = () => {
	const {
		filterValues: { params, search, format, cost },
		handleSelectChange,
		handleSearchInputChange,
	} = useSearchFilter();

	return (
		<Row gutter={16}>
			<Col span={6}>
				<BaseTypeMultiSelect
					handleChange={handleSelectChange('params')}
					dictionary={dictMocks}
					initialValue={params}
					placeholder={'Параметры'}
					style={{ width: '100%' }} />
			</Col>
			<Col span={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('format')}
					dictionary={dictMocks}
					initialValue={format}
					placeholder={'Формат'}
					style={{ width: '100%' }}/>
			</Col>
			<Col span={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('cost')}
					dictionary={dictMocks}
					initialValue={cost}
					placeholder={'Стоимость'}
					style={{ width: '100%' }}/>
			</Col>
			<Col span={12}>
				<Input
					value={search}
					onChange={handleSearchInputChange}
					placeholder={'Введите параметры поиска...'}/>
			</Col>
		</Row>
	);
};

export default SearchFilterDesktop;
