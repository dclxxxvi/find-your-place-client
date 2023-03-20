import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { Input, type InputProps } from 'antd';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface Props extends Omit<InputProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const TextField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<Input {...field} {...rest} status={fieldState.invalid ? 'error' : ''} />
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(TextField);
