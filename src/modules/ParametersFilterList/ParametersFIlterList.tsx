import * as React from 'react';
import { Card, Col, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { useDictionaries } from '../../hooks';
import BaseTypeMultiSelect from '../../shared/BaseTypeMultiSelect';

const ParametersFilterList: React.FC = () => {
	const { parametersDictionary, isLoading } = useDictionaries();

	return (
		<Card>
			<Row>
				{parametersDictionary.map((parameter) => {
					return (
						<Col key={parameter.category.id}>
							<Space>
								<Title level={3}>{parameter.category.name}</Title>
								<BaseTypeMultiSelect
									dictionary={parameter.dictionary}
									loading={isLoading}
									handleChange={() => {}}
								/>
							</Space>
						</Col>
					);
				})}
			</Row>
		</Card>
	);
};

export default ParametersFilterList;
