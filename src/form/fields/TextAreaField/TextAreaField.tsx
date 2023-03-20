import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { type ReactNode } from 'react';
import TextArea, { type TextAreaProps } from 'antd/es/input/TextArea';
import ErrorMessage from '../../components/ErrorMessage';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface Props extends Omit<TextAreaProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const TextAreaField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<TextArea {...field} {...rest} status={fieldState.invalid ? 'error' : ''} />
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(TextAreaField);
