import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { DatePicker } from 'antd';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';
import { type RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type dayjs from 'dayjs';

const { RangePicker } = DatePicker;

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface Props extends Omit<RangePickerProps<dayjs.Dayjs>, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const RangeField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	const onChange = (inputChange: (values: any) => void) => (values: any) => {
		inputChange(values);
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<RangePicker
						{...field}
						{...rest}
						showTime
						onChange={onChange(field.onChange)}
						status={fieldState.invalid ? 'error' : ''}
					/>
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(RangeField);
