import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { Checkbox, type CheckboxProps } from 'antd';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';

type ExcludedProps = keyof ControllerRenderProps & 'children';

interface Props extends Omit<CheckboxProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const CheckboxGroupField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Checkbox {...field} {...rest}>
						<Label label={label} />
					</Checkbox>
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(CheckboxGroupField);
