import * as React from 'react';
import { type ITariff } from '../../../../types';
import Typography from 'antd/es/typography';
import { Card, Space } from 'antd';
import { TARIFF_INTERVALS } from '../../../../mocks/tariff_intervals';

interface Props {
	tariff: ITariff;
}

const Tariff: React.FC<Props> = ({ tariff }) => {
	return (
		<Card style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
			<Space size={'middle'} direction={'vertical'}>
				<Typography.Title level={ 5 } style={ { margin: 0 } }>
					{ tariff.title }
				</Typography.Title>
				<Typography.Text>
					<strong>{ tariff.cost } ₽</strong>
				</Typography.Text>
				<Typography.Text>
					за { TARIFF_INTERVALS.find((int) => int.code_name === tariff.interval)?.name }
				</Typography.Text>
			</Space>
		</Card>
	);
};

export default Tariff;
