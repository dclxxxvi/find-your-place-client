import * as React from 'react';
import { Content } from 'antd/es/layout/layout';
import { PageWrapper } from '../../components';
import CardBenefitsList from './components/CardBenefits/CardBenefitsList';
import CardToActionList from './components/CardToAction/CardToActionList';
import ImportanceBlockList from './components/ImportanceBlock/ImportanceBlockList';
import { Space, Typography } from 'antd';
import ReferralProgramList from './components/ReferralProgram/ReferralProgramList';
const LandingForMain: React.FC = () => {
	return (
		<Content>
			<PageWrapper>
				<Space direction='vertical' size={'large'} style={{ margin: '25px 0' }}>
					<CardBenefitsList />
					<Typography.Title level={2}>Несколько причин почему вам нужен коворкинг</Typography.Title>
					<ImportanceBlockList />
					<CardToActionList/>
					<ReferralProgramList/>
				</Space>
			</PageWrapper>
		</Content>
	);
};

export default LandingForMain;
