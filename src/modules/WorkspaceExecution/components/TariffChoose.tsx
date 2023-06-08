import * as React from 'react';
import { Col, Radio, type RadioChangeEvent, Row, Skeleton, Space } from 'antd';
import { type ITariff } from '../../../types';
import Typography from 'antd/es/typography';
import { TARIFF_INTERVALS } from '../../../mocks/tariff_intervals';
import { Controller } from 'react-hook-form';
import ErrorMessage from '../../../form/components/ErrorMessage';

interface TariffRadioProps {
	tariff: ITariff;
}

const TariffRadio: React.FC<TariffRadioProps> = ({ tariff }) => {
	return (
		<Col>
			<Radio.Button value={tariff.id} style={ { height: '100%' } }>
				<Space direction={ 'vertical' } size={ 'large' } style={ { margin: 12 } }>
					<Typography.Title level={ 5 } style={ { margin: 0 } }>
						{ tariff.title }
					</Typography.Title>
					<Space size={'small'}>
						<Typography.Title level={ 5 } style={ { margin: 0 } }>
							{ tariff.cost }
						</Typography.Title>
						<Typography.Text>
							₽
						</Typography.Text>
						<Typography.Text>
							за
						</Typography.Text>
						<Typography.Text>
							{ TARIFF_INTERVALS.find((int) => int.code_name === tariff.interval)?.name }
						</Typography.Text>
					</Space>
				</Space>
			</Radio.Button>
		</Col>
	);
};

interface Props {
	tariffs?: ITariff[];
	control: any;
}

const TariffChoose: React.FC<Props> = ({ tariffs, control }) => {
	if (!tariffs) {
		return <Skeleton active/>;
	}

	const onChange = (handleChange: (value: any) => void) => (e: RadioChangeEvent) => {
		handleChange(e.target.value);
	};

	return (
		<Controller
			name={ 'tariff_id' }
			control={control}
			render={ ({ field, fieldState }) =>
				<Radio.Group onChange={onChange(field.onChange)} value={field.value}>
					<Row gutter={ [24, 24] } wrap>
						{ tariffs?.map((tariff) => {
							return <TariffRadio key={tariff.id} tariff={tariff} />;
						}) }
						<Col span={24}>
							<ErrorMessage fieldState={fieldState} />
						</Col>
					</Row>
				</Radio.Group>
			}
		/>
	);
};

export default TariffChoose;
