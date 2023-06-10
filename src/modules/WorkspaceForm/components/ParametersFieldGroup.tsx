import * as React from 'react';
import Typography from 'antd/es/typography';
import { Col, Row } from 'antd';
import BaseTypeMultiSelectField from '../../../form/fields/BaseTypeMultiSelectField';
import { useDictionaries } from '../../../hooks';

interface Props {
	control: any;
	disabled?: boolean;
}

const ParametersFieldGroup: React.FC<Props> = ({ control, disabled }) => {
	const { parametersDictionary, isLoading } = useDictionaries();

	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<Typography.Text>Параметры</Typography.Text>
			</Col>
			<Col span={24}>
				<Row gutter={[8, 8]}>
					{parametersDictionary.map((parameters, index) => {
						return (
							<Col key={parameters.category.id} span={24} xl={8}>
								<BaseTypeMultiSelectField
									style={{ width: '100%' }}
									name={`parametersToAdd[${index}]`}
									control={control}
									dictionary={parameters.dictionary}
									label={parameters.category.name}
									loading={isLoading}
									disabled={disabled}
								/>
							</Col>
						);
					})}
				</Row>
			</Col>
		</Row>
	);
};

export default React.memo(ParametersFieldGroup);
