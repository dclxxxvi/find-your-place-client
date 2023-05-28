import * as React from 'react';
import SuperAdvantage from './SuperAdvantage';
import { Typography, Row, Col, Space, Checkbox } from 'antd';

const PropertiesOfAdvantagesList: React.FC = () => {
	return (
		<>
			<Row>
				<Col xs={24} sm={24} md={8} lg={24}>
					<Typography.Title level={4} style={{ marginTop: 15 }}>
							Комнаты
					</Typography.Title>
					<Space direction='vertical'>
						<Checkbox>
							<SuperAdvantage advantage='meeting_room' rowReverse={true} />
						</Checkbox>
						<Checkbox>
							<SuperAdvantage advantage='podium' rowReverse={true}/>
						</Checkbox>
						<Checkbox>
							<SuperAdvantage advantage='shower' rowReverse={true}/>
						</Checkbox>
						<Checkbox>
							<SuperAdvantage advantage='smoking_rooms' rowReverse={true}/>
						</Checkbox>
					</Space>

				</Col>
				<Col xs={24} sm={24} md={8} lg={24}>
					<Typography.Title level={4} style={{ marginTop: 15 }}>
							Дополнительно
					</Typography.Title>
					<Space direction='vertical'>
						<Checkbox>
							<SuperAdvantage advantage='24mp' rowReverse={true}/>
						</Checkbox>
						<Checkbox>
							<SuperAdvantage advantage='local_cafe' rowReverse={true}/>
						</Checkbox>
						<Checkbox>
							<SuperAdvantage advantage='keyboard' rowReverse={true} />
						</Checkbox>
					</Space>

				</Col>
				<Col xs={24} sm={24} md={8} lg={24}>
					<Typography.Title level={4} style={{ marginTop: 15 }}>
							Технические особенности
					</Typography.Title>
					<Space direction='vertical'>
						<Checkbox>
							<SuperAdvantage advantage='wifi' rowReverse={true}/>
						</Checkbox>
						<Checkbox>
							<SuperAdvantage advantage='print' rowReverse={true} />
						</Checkbox>
					</Space>

				</Col>

			</Row>
		</>

	);
};

export default PropertiesOfAdvantagesList;
