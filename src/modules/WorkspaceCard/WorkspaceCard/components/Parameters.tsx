import * as React from 'react';
import { type IBaseType } from '../../../../types';
import { Col, Divider, Space } from 'antd';
import { AimOutlined } from '@ant-design/icons';
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
			<Divider style={{ margin: '5px 0 ' }}/>
			{parameters.map((parameter) => {
				return (
					<Col key={parameter.id} span={12}>
						<Space>
							<AimOutlined/>
							<Typography.Text>
								{parameter.name}
							</Typography.Text>
						</Space>
					</Col>
				);
			})}
			<Divider style={{ margin: '5px 0 ' }}/>
		</>
	);
};

export default React.memo(Parameters);
