import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { InputNumber, type InputNumberProps } from 'antd';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface Props extends Omit<InputNumberProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const NumberField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<InputNumber {...field} {...rest} status={fieldState.invalid ? 'error' : ''} />
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(NumberField);
