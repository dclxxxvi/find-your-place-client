import * as React from 'react';
import RangeField from '../../../form/fields/DateTimeField/DateTimeField';

interface Props {
	control: any;
}

const DatePicker: React.FC<Props> = ({ control }) => {
	return (
		<RangeField name={'startDate'} control={control} />
	);
};

export default DatePicker;
