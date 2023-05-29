import * as React from 'react';
import { type IBaseType } from '../../../../types';
import { Col } from 'antd';
import SuperAdvantage from '../../../../components/SuperAdvantages';

interface Props {
	parameters: IBaseType[];
}

const Parameters: React.FC<Props> = ({ parameters }) => {
	if (!parameters || parameters?.length === 0) {
		return null;
	}

	return (
		<>
			{parameters.map((parameter) => {
				return (
					<Col key={parameter.id} span={12}>
						<SuperAdvantage parameter={parameter} />
					</Col>
				);
			})}
		</>
	);
};

export default React.memo(Parameters);
