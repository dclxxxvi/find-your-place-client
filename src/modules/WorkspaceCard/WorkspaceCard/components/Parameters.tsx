import * as React from 'react';
import { type IBaseType } from '../../../../types';
import { Col } from 'antd';
import Typography from 'antd/es/typography';

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
						<Typography.Text>
							{parameter.name}
						</Typography.Text>
					</Col>
				);
			})}
		</>
	);
};

export default React.memo(Parameters);
