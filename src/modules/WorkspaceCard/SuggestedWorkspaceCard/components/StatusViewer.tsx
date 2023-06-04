import * as React from 'react';
import { type IBaseType } from '../../../../types';
import { Steps } from 'antd';
import { useMemo } from 'react';

enum EStatus {
	HANDLING = 'handling',
	CANCELED = 'canceled',
	APPROVED = 'approved',
}

interface Props {
	status?: IBaseType;
}

const StatusViewer: React.FC<Props> = ({ status }) => {
	const current = useMemo(() => {
		if (status?.code_name === EStatus.CANCELED || status?.code_name === EStatus.APPROVED) {
			return 2;
		}
		if (status?.code_name === EStatus.HANDLING) {
			return 1;
		}
		return 0;
	}, [status?.code_name]);

	const stepStatus = useMemo(() => {
		if (status?.code_name === EStatus.CANCELED) {
			return 'error';
		}
		return 'finish';
	}, [status?.code_name]);

	const finalStepTitle = useMemo(() => {
		if (status?.code_name === EStatus.CANCELED) {
			return 'Форма отклонена';
		}
		return 'Начислены бонусы';
	}, [status?.code_name]);

	if (!status) {
		return null;
	}

	return (
		<Steps
			direction="vertical"
			current={current}
			status={stepStatus}
			size="small"
			items={[
				{
					title: 'Заявка отправлена',
					description: ' ',
				},
				{
					title: 'Обработка формы',
					description: ' ',
				},
				{
					title: finalStepTitle,
					description: ' ',
				},
			]}
		/>
	);
};

export default React.memo(StatusViewer);
