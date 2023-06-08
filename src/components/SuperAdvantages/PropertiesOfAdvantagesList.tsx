import * as React from 'react';
import { Typography, Row, Col, Skeleton } from 'antd';
import { useDictionaries } from '../../hooks';
import BaseTypeCheckboxGroup from '../../shared/BaseTypeCheckboxGroup';
import { useSearchFilter } from '../../modules/SearchFilter/hooks/useSearchFilter';

const PropertiesOfAdvantagesList: React.FC = () => {
	const dictionaries = useDictionaries();
	const {
		filterValues: { features, rooms, additional },
		handleMultipleSelectChange,
	} = useSearchFilter();

	if (!dictionaries?.parametersDictionary?.length) {
		return <Row>
			<Skeleton active/>
		</Row>;
	}

	return (
		<Row>
			<Col xs={24} sm={24} md={8} xxl={24}>
				<Typography.Title level={4} style={{ marginTop: 15 }}>
					{dictionaries?.parametersDictionary[0].category.name}
				</Typography.Title>
				<BaseTypeCheckboxGroup
					dictionary={dictionaries?.parametersDictionary[0].dictionary}
					value={additional}
					handleChange={handleMultipleSelectChange('additional')}
				/>
			</Col>
			<Col xs={24} sm={24} md={8} xxl={24}>
				<Typography.Title level={4} style={{ marginTop: 15 }}>
					{dictionaries?.parametersDictionary[1].category.name}
				</Typography.Title>
				<BaseTypeCheckboxGroup
					dictionary={dictionaries?.parametersDictionary[1].dictionary}
					value={features}
					handleChange={handleMultipleSelectChange('features')}
				/>
			</Col>
			<Col xs={24} sm={24} md={8} xxl={24}>
				<Typography.Title level={4} style={{ marginTop: 15 }}>
					{dictionaries?.parametersDictionary[2].category.name}
				</Typography.Title>
				<BaseTypeCheckboxGroup
					dictionary={dictionaries?.parametersDictionary[2].dictionary}
					value={rooms}
					handleChange={handleMultipleSelectChange('rooms')}
				/>
			</Col>
		</Row>
	);
};

export default PropertiesOfAdvantagesList;
