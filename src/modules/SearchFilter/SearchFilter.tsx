import * as React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { type IBaseType } from '../../types';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { type ChangeEvent, useCallback } from 'react';
import { type TFilterFieldType, updateFilter, useAppDispatch, useAppSelector } from '../../redux';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

const dictMocks: IBaseType[] = [
	{ id: '1', code: 'ExampleCode1', name: 'Первый пример' },
	{ id: '2', code: 'ExampleCode2', name: 'Второй пример' },
	{ id: '3', code: 'ExampleCode3', name: 'Третий пример' },
	{ id: '4', code: 'ExampleCode4', name: 'Четвертый пример' },
	{ id: '5', code: 'ExampleCode5', name: 'Пятый пример' },
	{ id: '6', code: 'ExampleCode6', name: 'Шестой пример' },
] as IBaseType[];

interface ISearchFilterProps {
	isGlobalSearchFilter: boolean;
}
const SearchFilter: React.FC<ISearchFilterProps> = ({ isGlobalSearchFilter }) => {
	const breakpoint = useBreakpoint(true);
	const isMobile = !breakpoint.md;
	const dispatch = useAppDispatch();
	const { search, params, cost, format } = useAppSelector(state => state.searchFilterReducer);

	const onSelectChange = useCallback((filterName: TFilterFieldType) => (value: IBaseType | IBaseType[]) => {
		dispatch(updateFilter({ field: filterName, value }));
	}, [dispatch]);

	const onSearchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>
		dispatch(updateFilter({ field: 'search', value: e.target.value })), [dispatch]);

	return (
		<>
			<Row gutter={[{ xs: 10, sm: 10, md: 10, lg: 10, xxl: 16 }, 20]}>
				{
					!isMobile &&
				<>
					<Col xxl={5} lg={4} md={5} >
						<BaseTypeMultiSelect
							handleChange={onSelectChange('params')}
							dictionary={dictMocks}
							initialValue={params}
							placeholder={'Параметры'}
							style={{ width: '100%' }} />
					</Col>
					<Col xxl={3} lg={3} md={3}>
						<BaseTypeSelect
							handleChange={onSelectChange('format')}
							dictionary={dictMocks}
							initialValue={format}
							placeholder={'Формат'}
							style={{ width: '100%' }}/>
					</Col>
					<Col xxl={3} lg={3} md={3}>
						<BaseTypeSelect
							handleChange={onSelectChange('cost')}
							dictionary={dictMocks}
							initialValue={cost}
							placeholder={'Стоимость'}
							style={{ width: '100%' }}/>
					</Col>
				</>
				}

				{
					isGlobalSearchFilter
						? <Col xxl={10} lg={10} md={9} sm={18} xs={17}>
							<Input
								value={search}
								onChange={onSearchInputChange}
								placeholder={'Введите параметры поиска...'}/>
						</Col>
						: <Col xxl={13} lg={14} md={13} sm={24} xs={24}>
							<Input
								value={search}
								onChange={onSearchInputChange}
								placeholder={'Введите параметры поиска...'}/>
						</Col>
				}

				{
					isGlobalSearchFilter &&
				<Col xxl={3} lg={4} md={4} sm={6} xs={7}>
					<Button type={'primary'} shape={'default'} block={true}>
						Найти место
					</Button>
				</Col>
				}

			</Row>
			{
				isMobile &&
				<Row gutter={{ xs: 10, sm: 10 }} style={{ marginTop: '10px' }}>
					<Col xs={isGlobalSearchFilter ? 7 : 10} sm={isGlobalSearchFilter ? 8 : 10} >
						<BaseTypeMultiSelect
							handleChange={onSelectChange('params')}
							dictionary={dictMocks}
							initialValue={params}
							placeholder={'Параметры'}
							style={{ width: '100%' }} />
					</Col>
					<Col xs={isGlobalSearchFilter ? 5 : 7} sm={isGlobalSearchFilter ? 5 : 7}>
						<BaseTypeSelect
							handleChange={onSelectChange('format')}
							dictionary={dictMocks}
							initialValue={format}
							placeholder={'Формат'}
							style={{ width: '100%' }}/>
					</Col>
					<Col xs={isGlobalSearchFilter ? 5 : 7} sm={isGlobalSearchFilter ? 5 : 7}>
						<BaseTypeSelect
							handleChange={onSelectChange('cost')}
							dictionary={dictMocks}
							initialValue={cost}
							placeholder={'Стоимость'}
							style={{ width: '100%' }}/>
					</Col>
				</Row>

			}
		</>
	);
};

export default React.memo(SearchFilter);
