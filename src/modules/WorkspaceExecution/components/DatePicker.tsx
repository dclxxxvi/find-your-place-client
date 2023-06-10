import * as React from 'react';
import RangeField from '../../../form/fields/RangeField/RangeField';
import { type TInterval } from '../../../types/TInterval';

interface Props {
	control: any;
	interval?: TInterval;
}

const DatePicker: React.FC<Props> = ({ control, interval }) => {
	if (interval === 'hour') {
		return <RangeField name={'dates'} control={control} showTime={{ format: 'HH' }}/>;
	}

	// if (interval === 'month' || interval === 'year') {
	// 	return <RangeField name={'dates'} control={control} picker={interval} />;
	// }

	return (
		<RangeField name={'dates'} control={control} picker={'date'} />
	);
};

export default React.memo(DatePicker);
