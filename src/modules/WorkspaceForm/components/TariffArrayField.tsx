import * as React from 'react';
import { type FieldError, useFieldArray } from 'react-hook-form';
import { Button, Card, Col, Row, Space } from 'antd';
import Typography from 'antd/es/typography';
import TextField from '../../../form/fields/TextField';
import { CloseOutlined } from '@ant-design/icons';
import BaseTypeSelectField from '../../../form/fields/BaseTypeSelectField';
import NumberField from '../../../form/fields/NumberField';
import ErrorMessage from '../../../form/components/ErrorMessage';
import { TARIFF_INTERVALS } from '../../../mocks/tariff_intervals';

interface Props {
	control: any;
	fieldState: { invalid: boolean; isDirty: boolean; isTouched: boolean; error?: FieldError };
	disabled?: boolean;
}

const TariffArrayField: React.FC<Props> = ({ control, fieldState, disabled }) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'tariffs',
		rules: { maxLength: 4, minLength: 1 },
	});

	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<Typography.Text>Тарифы / цены</Typography.Text>
			</Col>
			<Col span={24}>
				<Row gutter={[24, 24]} wrap>
					{fields.map((item, index) => {
						return (
							<Col key={item.id}>
								<Card size={'small'}>
									<Space direction={'vertical'} size={'large'} style={{ width: 280 }}>
										<Space direction={'vertical'} style={{ width: '100%' }} size={'large'}>
											<Row justify={'space-between'}>
												<Typography.Title level={5} style={{ margin: 0 }}>
											Тариф {index + 1}
												</Typography.Title>
												<Button
													size={'small'}
													shape={'circle'}
													icon={<CloseOutlined />}
													danger
													onClick={() => remove(index)}
													disabled={disabled}
												/>
											</Row>
											<TextField
												control={control}
												name={`tariffs.${index}.title`}
												size={'small'}
												placeholder={'Название тарифа'}
												disabled={disabled}
											/>
										</Space>
										<Space align={'center'}>
											<Space direction={'vertical'} align={'end'}>
												<Typography.Text>Цена:</Typography.Text>
												<Typography.Text>за</Typography.Text>
											</Space>
											<Space direction={'vertical'}>
												<NumberField
													style={{ width: 130 }}
													control={control}
													name={`tariffs.${index}.cost`}
													size={'small'}
													addonAfter={ '₽' }
													maxLength={8}
													controls={false}
													disabled={disabled}
												/>
												<BaseTypeSelectField
													style={{ width: 100 }}
													size={'small'}
													dictionary={TARIFF_INTERVALS}
													control={control}
													name={`tariffs.${index}.interval`}
													placeholder={'Час'}
													disabled={disabled}
												/>
											</Space>
										</Space>
									</Space>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Col>
			{fields?.length < 4 && <Col span={ 24 }>
				<Button disabled={disabled} onClick={ () => append({}) }>Добавить тариф</Button>
			</Col> }
			{ fieldState.error && <Col span={ 24 }>
				<ErrorMessage fieldState={ fieldState }/>
			</Col> }
		</Row>
	);
};

export default TariffArrayField;
