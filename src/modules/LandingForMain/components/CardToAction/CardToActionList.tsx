import * as React from 'react';
import { Col, Row } from 'antd';
import CardToAction from './CardToAction';

const CardToActionList: React.FC = () => {
	return (
		<Row gutter={[24, 24]}>
			<Col span={6} xs={24} sm={24} md={12} xl={8} style={{ flexGrow: '1' }}>
				<CardToAction index={1} title={'Регистрируйся'} description={'Каждому даем бонус при регистрации, ' +
					'также есть партнерская программа'}/>
			</Col>
			<Col span={8} xs={24} sm={24} md={12} xl={8}>
				<CardToAction index={2} title={'Выбирай'} description={'При выборе места доступна глубокая ' +
					'фильтрация по различным параметрам'}/>
			</Col>
			<Col span={8} xs={24} sm={24} md={12} xl={8}>
				<CardToAction index={3} title={'Создавай'} description={'Дальше все зависит только от тебя! Приходи ' +
					'в забронированное место и вперед за работу!'}/>
			</Col>
		</Row>
	);
};

export default CardToActionList;
