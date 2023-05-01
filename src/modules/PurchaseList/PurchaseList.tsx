import * as React from 'react';
import { type IBaseType } from '../../types';
import { Col, Row, Space } from 'antd';
import BaseTypeSelect from '../../shared/BaseTypeSelect';
import { useState } from 'react';
import { workspaceMocks } from '../../mocks/workspaces';
import PurchaseWorkspaceCard from '../WorkspaceCard/PurchaseWorkspaceCard/PurchaseWorkspaceCard';

const dictMocks: IBaseType[] = [
	{ id: '1', code_name: 'ExampleCode1', name: 'Первый пример' },
	{ id: '2', code_name: 'ExampleCode2', name: 'Второй пример' },
	{ id: '3', code_name: 'ExampleCode3', name: 'Третий пример' },
	{ id: '4', code_name: 'ExampleCode4', name: 'Четвертый пример' },
	{ id: '5', code_name: 'ExampleCode5', name: 'Пятый пример' },
	{ id: '6', code_name: 'ExampleCode6', name: 'Шестой пример' },
] as IBaseType[];

const PurchaseList: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [status, setStatus] = useState<IBaseType | undefined>();
	const handleStatusChange = (value: IBaseType) => setStatus(value);

	return (
		<Space direction={'vertical'} size={'large'}>
			<Row justify={'end'}>
				<Col lg={6} md={12} sm={24}>
					<BaseTypeSelect
						style={{ width: '100%' }}
						dictionary={dictMocks}
						handleChange={handleStatusChange}
						placeholder={'Статус'}
					/>
				</Col>
			</Row>
			<Row gutter={[0, 24]}>
				{workspaceMocks.map(ws => {
					return (
						<Col span={24} key={ws.id}>
							<PurchaseWorkspaceCard workspace={ws}/>
						</Col>
					);
				})}
			</Row>
		</Space>
	);
};

export default PurchaseList;
