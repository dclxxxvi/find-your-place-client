import * as React from 'react';
import { useState } from 'react';
import { Col, Modal, Row, Tabs } from 'antd';
import { tabItems, TabKeys } from './consts';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

interface Props {
	open: boolean;
	handleClose: () => void;
}

const AuthorizationModal: React.FC<Props> = ({ open, handleClose }) => {
	const [tab, setTab] = useState<TabKeys>(TabKeys.LOGIN);
	const handleTabChange = (activeTab: string) => setTab(activeTab as TabKeys);

	return (
		<Modal open={open} footer={null} onCancel={handleClose}>
			<Row>
				<Col span={24}>
					<Tabs items={tabItems} activeKey={tab} onChange={handleTabChange}/>
				</Col>
				<Col span={24}>
					{tab === TabKeys.LOGIN && <LoginForm handleClose={handleClose}/>}
					{tab === TabKeys.REGISTRATION && <RegistrationForm handleClose={handleClose}/>}
				</Col>
			</Row>
		</Modal>
	);
};

export default React.memo(AuthorizationModal);
