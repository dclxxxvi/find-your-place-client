import * as React from 'react';
import SuperAdvantage from './SuperAdvantage';
import { Typography, Row, Col, Space, Checkbox, Skeleton } from 'antd';
import { useDictionaries } from '../../hooks';

const PropertiesOfAdvantagesList: React.FC = () => {
	const dictionaries = useDictionaries();

	if (!dictionaries?.parametersDictionary?.length) {
		return <Row>
			<Skeleton />
		</Row>;
	}

	return (
		<Row>
			{dictionaries?.parametersDictionary?.map((parameters) => {
				return <Col key={parameters.category.id} xs={24} sm={24} md={8} xxl={24}>
					<Typography.Title level={4} style={{ marginTop: 15 }}>
						{parameters.category.name}
					</Typography.Title>
					<Space direction='vertical'>
						{ parameters.dictionary.map((parameter) => {
							return <Checkbox key={parameter.id}>
								<SuperAdvantage parameter={parameter} rowReverse={true}/>
							</Checkbox>;
						}) }
					</Space>
				</Col>;
			})}
		</Row>
	);
};

export default PropertiesOfAdvantagesList;
