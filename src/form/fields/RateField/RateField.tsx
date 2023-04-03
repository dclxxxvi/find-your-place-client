import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { Rate, type RateProps } from 'antd';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';

type ExcludedProps = keyof ControllerRenderProps;

interface Props extends Omit<RateProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const RateField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<Rate {...field} {...rest} />
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(RateField);
