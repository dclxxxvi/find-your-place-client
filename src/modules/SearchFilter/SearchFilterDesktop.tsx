import * as React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { type IBaseType } from '../../types';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { useSearchFilter } from './hooks/useSearchFilter';

const dictMocks: IBaseType[] = [
	{ id: '1', code_name: 'ExampleCode1', name: 'Первый пример' },
	{ id: '2', code_name: 'ExampleCode2', name: 'Второй пример' },
	{ id: '3', code_name: 'ExampleCode3', name: 'Третий пример' },
	{ id: '4', code_name: 'ExampleCode4', name: 'Четвертый пример' },
	{ id: '5', code_name: 'ExampleCode5', name: 'Пятый пример' },
	{ id: '6', code_name: 'ExampleCode6', name: 'Шестой пример' },
] as IBaseType[];

interface Props {
	isGlobal?: boolean;
}

const SearchFilterDesktop: React.FC<Props> = ({ isGlobal }) => {
	const {
		filterValues: { params, search, format, cost },
		handleSelectChange,
		handleSearchInputChange,
	} = useSearchFilter();

	return (
		<Row gutter={[10, 20]}>
			<Col xxl={5} lg={4} md={5}>
				<BaseTypeMultiSelect
					handleChange={handleSelectChange('params')}
					dictionary={dictMocks}
					initialValue={params}
					placeholder={'Параметры'}
					style={{ width: '100%' }} />
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('format')}
					dictionary={dictMocks}
					initialValue={format}
					placeholder={'Формат'}
					style={{ width: '100%' }}/>
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('cost')}
					dictionary={dictMocks}
					initialValue={cost}
					placeholder={'Стоимость'}
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
