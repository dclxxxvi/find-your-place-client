import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { DatePicker, type DatePickerProps } from 'antd';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface Props extends Omit<DatePickerProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const DateTimeField: React.FC<Props> = ({ name, label, control, ...rest }) => {
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
					<DatePicker
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

export default React.memo(DateTimeField);
