import * as React from 'react';
import { Col, Row, Space } from 'antd';

interface Props {
	advantage: string;
}

const SuperAdvantage: React.FC<Props> = ({ advantage }) => {
	enum icons {
		'24mp' = 'Круглосуточно',
		keyboard = 'Аренда гаджетов',
		subway = 'Метро',
		podium = 'Конференц зал',
		smoking_rooms = 'Комнаты для курения',
		shower = 'Душевые комнаты',
		print = 'Печать материалов',
		wifi = 'Wi-Fi',
		meeting_room = 'Переговорные комнаты',
		local_cafe = 'Чай, кофе',
	}
	const iconWithProperty = (iconName: string) => {
		return (
			<Space>
				<span className="material-symbols-outlined">
					{iconName}
				</span>{icons.print}
			</Space>);
	};

	return (
		<>
			<Row align={'middle'} justify={'space-between'}>

				{
					Object.entries(icons).map(([key, value]) => (
						<Col span={4} key={key}>
							{iconWithProperty(key)}
						</Col>
					))
				}
			</Row>
		</>

	);
};

export default SuperAdvantage;
