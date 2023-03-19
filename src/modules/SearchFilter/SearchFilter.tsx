import * as React from 'react';
import { Col, Input, Row } from 'antd';
import { type BaseType } from '../../types';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { type ChangeEvent, useCallback } from 'react';
import { type TFilterFieldType, updateFilter, useAppDispatch, useAppSelector } from '../../redux';

const dictMocks: BaseType[] = [
	{ id: '1', code: 'ExampleCode1', name: 'Первый пример' },
	{ id: '2', code: 'ExampleCode2', name: 'Второй пример' },
	{ id: '3', code: 'ExampleCode3', name: 'Третий пример' },
	{ id: '4', code: 'ExampleCode4', name: 'Четвертый пример' },
	{ id: '5', code: 'ExampleCode5', name: 'Пятый пример' },
	{ id: '6', code: 'ExampleCode6', name: 'Шестой пример' },
] as BaseType[];

const SearchFilter: React.FC = () => {
	const dispatch = useAppDispatch();
	const { search, params, cost, format } = useAppSelector(state => state.searchFilterReducer);

	const onSelectChange = useCallback((filterName: TFilterFieldType) => (value: BaseType | BaseType[]) => {
		dispatch(updateFilter({ field: filterName, value }));
	}, [dispatch]);

	const onSearchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>
		dispatch(updateFilter({ field: 'search', value: e.target.value })), [dispatch]);

	return (
		<Row gutter={{ sm: 16, xs: 8 }}>
			<Col span={6}>
				<BaseTypeMultiSelect
					handleChange={onSelectChange('params')}
					dictionary={dictMocks}
					initialValue={params}
					placeholder={'Параметры'}
					style={{ width: '100%' }} />
			</Col>
			<Col span={3}>
				<BaseTypeSelect
					handleChange={onSelectChange('format')}
					dictionary={dictMocks}
					initialValue={format}
					placeholder={'Формат'}
					style={{ width: '100%' }}/>
			</Col>
			<Col span={3}>
				<BaseTypeSelect
					handleChange={onSelectChange('cost')}
					dictionary={dictMocks}
					initialValue={cost}
					placeholder={'Стоимость'}
					style={{ width: '100%' }}/>
			</Col>
			<Col span={12}>
				<Input
					value={search}
					onChange={onSearchInputChange}
					placeholder={'Введите параметры поиска...'}/>
			</Col>
		</Row>
	);
};

export default React.memo(SearchFilter);
