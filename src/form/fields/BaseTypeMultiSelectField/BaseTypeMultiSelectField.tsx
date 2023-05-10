import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { type SelectProps } from 'antd';
import { type ReactNode } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';
import { type IBaseType } from '../../../types';
import BaseTypeMultiSelect from '../../../shared/BaseTypeMultiSelect';

type ExcludedProps = keyof ControllerRenderProps | 'status' | 'handleChange';

interface Props extends Omit<SelectProps, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	dictionary?: IBaseType[];
	label?: ReactNode;
}

const BaseTypeMultiSelectField: React.FC<Props> = (
	{ name, label, control, ...rest },
) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<BaseTypeMultiSelect
						{...field}
						{...rest}
						handleChange={field.onChange}
						status={fieldState.invalid ? 'error' : ''}
					/>
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(BaseTypeMultiSelectField);
