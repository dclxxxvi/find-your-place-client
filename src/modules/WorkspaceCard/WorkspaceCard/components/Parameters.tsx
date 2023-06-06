import * as React from 'react';
import { type IBaseType } from '../../../../types';
import { Col } from 'antd';
import SuperAdvantage from '../../../../components/SuperAdvantages';

interface Props {
	parameters: IBaseType[];
	isOverviewCard: boolean;
}

const Parameters: React.FC<Props> = ({ parameters, isOverviewCard }) => {
	if (!parameters || parameters?.length === 0) {
		return null;
	}
	if (isOverviewCard) {
		return (
			<>
				{parameters.map((parameter) => {
					return (
						<Col xs={24} sm={12} key={parameter.id} span={12}>
							<SuperAdvantage parameter={parameter} />
						</Col>
					);
				})}
			</>
		);
	}
	return (
		<>
			{parameters.map((parameter) => {
				return (
					<Col
						xs={24}
						sm={12}
						md={8}
						lg={7}
						xl={6}
						xxl={5} key={parameter.id} span={12}>
						<SuperAdvantage parameter={parameter} />
					</Col>
				);
			})}
		</>
	);
};

export default React.memo(Parameters);
