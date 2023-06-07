import * as React from 'react';
import RangeField from '../../../form/fields/RangeField/RangeField';

interface Props {
	control: any;
}

const DatePicker: React.FC<Props> = ({ control }) => {
	return (
		<RangeField name={'startDate'} control={control} />
	);
};

export default DatePicker;
