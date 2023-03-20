import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { Input, type InputProps, Space, Typography } from 'antd';
import { type ReactNode } from 'react';

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
				<Space direction={'vertical'} style={{ display: 'flex' }}>
					{ label !== undefined && <Typography.Text>{ label }</Typography.Text> }
					<Input {...field} {...rest} status={fieldState.invalid ? 'error' : ''} />
					{ fieldState.invalid && fieldState.error?.message !== undefined && (
						<Typography.Text type={ 'danger' }>
							{ fieldState.error?.message }
						</Typography.Text>) }
				</Space>
			)}
		/>
	);
};

export default TextField;
