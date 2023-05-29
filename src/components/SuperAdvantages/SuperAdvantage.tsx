import * as React from 'react';
import { Typography, Row } from 'antd';
import { icons } from './consts';
import { useMemo } from 'react';
import { type IBaseType } from '../../types';

interface Props {
	parameter: IBaseType;
	rowReverse?: boolean;
}

const SuperAdvantage: React.FC<Props> = ({ parameter, rowReverse }) => {
	const iconWithProperty = useMemo(() => {
		return Object.entries(icons).find(([icon]) => icon === parameter.code_name);
	}, [parameter.code_name]);

	if (!iconWithProperty) {
		return (
			<Typography.Text>
				{parameter.name}
			</Typography.Text>
		);
	}

	return (
		<Row>
			<div style={{
				display: 'flex',
				flexDirection: rowReverse ? 'row-reverse' : 'row',
				alignItems: 'center',
			}}>
				{ iconWithProperty[0] &&
					<Row align='middle' style={{
						marginLeft: rowReverse ? 10 : 0,
						marginRight: rowReverse ? 0 : 10,
					}}>
						<span className="material-symbols-outlined" >
							{iconWithProperty[0]}
						</span>
					</Row>
				}
				{ iconWithProperty[1] &&
					<Typography.Paragraph style={{ margin: 0 }}>
						{iconWithProperty[1]}
					</Typography.Paragraph>
				}
			</div>
		</Row>
	);
};

export default SuperAdvantage;
