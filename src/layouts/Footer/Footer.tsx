import * as React from 'react';
import SubFooter from '../../modules/ResponsibleFooter/SubFooter';
import MainFooter from '../../modules/ResponsibleFooter/MainFooter';
import { Divider } from 'antd';

const Footer: React.FC = () => {
	return (
		<>
			<Divider style={{ marginBottom: '0' }}/>
			<MainFooter/>
			<Divider style={{ margin: '0' }}/>
			<SubFooter/>
		</>
	);
};

export default Footer;
