import * as React from 'react';
import { type ITariff } from '../../../types';
import Typography from 'antd/es/typography';
import { getMinTariff, getTariffLabel } from '../consts';

interface Props {
	tariffs: ITariff[];
}

const MinTariffLabel: React.FC<Props> = ({ tariffs }) => {
	const minTariff = getMinTariff(tariffs);
	const tariffLabel = getTariffLabel(minTariff);

	if (!tariffs || !minTariff?.cost || !tariffLabel) {
		return null;
	}

	return (
		<Typography.Title
			style={{ marginTop: 0 }}
			level={4}
		>
			От {minTariff?.cost} рублей в {tariffLabel}
		</Typography.Title>
	);
};

export default React.memo(MinTariffLabel);
