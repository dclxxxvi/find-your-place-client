import * as React from 'react';
import { Button, Col, Input, Row } from 'antd';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { useSearchFilter } from './hooks/useSearchFilter';
import { useDictionaries } from '../../hooks';

interface Props {
	isGlobal?: boolean;
}

const SearchFilterDesktop: React.FC<Props> = ({ isGlobal }) => {
	const {
		filterValues: { search, additional, features, rooms },
		handleSelectChange,
		handleSearchInputChange,
		navigateToWorkspacesPage,
	} = useSearchFilter();

	const { isLoading, parametersDictionary } = useDictionaries();

	return (
		<Row gutter={[10, 20]}>
			<Col xxl={5} lg={4} md={5}>
				<BaseTypeSelect
					handleChange={handleSelectChange('additional')}
					initialValue={additional}
					dictionary={parametersDictionary[0]?.dictionary}
					placeholder={parametersDictionary[0]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }} />
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('features')}
					initialValue={features}
					dictionary={parametersDictionary[1]?.dictionary}
					placeholder={parametersDictionary[1]?.category.name}
					loading={isLoading}
					allowClear
					style={{ width: '100%' }}/>
			</Col>
			<Col xxl={3} lg={3} md={3}>
				<BaseTypeSelect
					handleChange={handleSelectChange('rooms')}
					initialValue={rooms}
					dictionary={parametersDictionary[2]?.dictionary}
					placeholder={parametersDictionary[2]?.category.name}
					loading={isLoading}
					allowClear
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
