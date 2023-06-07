import { type FC } from 'react';
import * as React from 'react';
import { List, Typography } from 'antd';
import { gray } from '@ant-design/colors';

const ReferralProgramList: FC = () => {
	const data = [
		'Добавляйте места и получайте баллы от 500 до 2000',
		'Оплачивайте бронирование до 99% бонусами',
		'Получайте кэшбэк при оплате через на сервис',
		'Приводите новых пользователей и получайте бесплатное посещение в подарок',
	];
	return (
		<>
			<List
				style={{ boxShadow: `0px 4px 4px ${gray[0]}`, borderRadius: '5px' }}
				header={<Typography.Title level={3} style={{ margin: 0 }}>Бонусная программа</Typography.Title>}
				bordered
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<Typography.Text></Typography.Text> {item}
					</List.Item>
				)}
			/>
		</>
	);
};

export default ReferralProgramList;
