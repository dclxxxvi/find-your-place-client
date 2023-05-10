import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';
import { MaskedInput } from 'antd-mask-input';
import { type MaskedInputProps } from 'antd-mask-input/build/main/lib/MaskedInput';

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface Props extends Omit<MaskedInputProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const MaskedInputField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<MaskedInput {...field} {...rest} status={fieldState.invalid ? 'error' : ''} />
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(MaskedInputField);
