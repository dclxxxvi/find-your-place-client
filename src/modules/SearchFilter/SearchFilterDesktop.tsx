import * as React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { useSearchFilter } from './hooks/useSearchFilter';
import { useDictionaries } from '../../hooks';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';

interface Props {
	isGlobal?: boolean;
}

const SearchFilterDesktop: React.FC<Props> = ({ isGlobal }) => {
	const {
		filterValues: { search, additional, features, rooms },
		handleMultipleSelectChange,
		handleSearchInputChange,
		navigateToWorkspacesPage,
	} = useSearchFilter();

	const { isLoading, parametersDictionary } = useDictionaries();

	return (
		<Row gutter={[10, 20]}>
			<Col xxl={5} lg={4} md={5}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('additional')}
					dictionary={parametersDictionary[0]?.dictionary}
					initialValue={additional}
					placeholder={parametersDictionary[0]?.category.name}
					loading={isLoading}
					allowClear
					maxTagCount={'responsive'}
					style={{ width: '100%' }} />
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('features')}
					dictionary={parametersDictionary[1]?.dictionary}
					initialValue={features}
					placeholder={parametersDictionary[1]?.category.name}
					loading={isLoading}
					allowClear
					maxTagCount={'responsive'}
					style={{ width: '100%' }}/>
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeMultiSelect
					handleChange={handleMultipleSelectChange('rooms')}
					dictionary={parametersDictionary[2]?.dictionary}
					initialValue={rooms}
					placeholder={parametersDictionary[2]?.category.name}
					loading={isLoading}
					allowClear
					maxTagCount={'responsive'}
					style={{ width: '100%' }}/>
			</Col>
			{ isGlobal
				? <Col xxl={10} lg={10} md={9}>
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
				<Col xxl={3} lg={4} md={4}>
					<Button type={'primary'} shape={'default'} block={true} onClick={navigateToWorkspacesPage}>
						Найти место
					</Button>
				</Col>
			}
		</Row>
	);
};

export default SearchFilterDesktop;
