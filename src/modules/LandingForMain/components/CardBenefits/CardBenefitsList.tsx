import * as React from 'react';
import { Col, Row } from 'antd';
import CardBenefits from './CardBenefits';

const CardBenefitsList: React.FC = () => {
	return (
		<Row gutter={[24, 24]}>
			<Col span={6} xs={24} sm={24} md={12} xl={6} style={{ flexGrow: '1' }}>
				<CardBenefits title={'90 мест'} description={'Открылось в январе'}/>
			</Col>
			<Col span={6} xs={24} sm={24} md={12} xl={6} style={{ flexGrow: '1' }}>
				<CardBenefits title={'30 городов'} description={'Где присутствует наш сервис'}/>
			</Col>
			<Col span={6} xs={24} sm={24} md={12} xl={6} style={{ flexGrow: '1' }}>
				<CardBenefits title={'10 крупнейших компаний'} description={'Доверили нам своих сотрудников'}/>
			</Col>
			<Col span={6} xs={24} sm={24} md={12} xl={6} style={{ flexGrow: '1' }}>
				<CardBenefits description={'> 1000 уникальных посетителей'} title={'>1000'}/>
			</Col>
		</Row>
	);
};

export default CardBenefitsList;
