import * as React from 'react';
import { Typography, Row } from 'antd';
import { icons } from './consts';

interface Props {
	advantage: string;
	rowReverse?: boolean;
}

const SuperAdvantage: React.FC<Props> = ({ advantage, rowReverse }) => {
	const findIconWithProperty = () => {
		return Object.entries(icons).find(([icon]) => icon === advantage);
	};
	const iconWithProperty = () => {
		const icon = findIconWithProperty();
		return (
			<Row>
				{
					icon &&
						<div style={{
							display: 'flex',
							flexDirection: rowReverse ? 'row-reverse' : 'row',
							alignItems: 'center',
						}}>
							{
								icon[0] &&
							<Row align='middle' style={{
								marginLeft: rowReverse ? 10 : 0,
								marginRight: rowReverse ? 0 : 10,
							}}>
								<span className="material-symbols-outlined" >
									{icon[0]}
								</span>
							</Row>

							}
							{
								icon[1] &&
							<Typography.Paragraph style={{ margin: 0 }}>
								{icon[1]}
							</Typography.Paragraph>
							}
						</div>
				}
			</Row>
		);
	};

	return (
		<>
			{
				iconWithProperty()
			}
		</>
	);
};

export default SuperAdvantage;
