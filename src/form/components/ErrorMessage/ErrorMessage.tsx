import * as React from 'react';
import { type ControllerFieldState } from 'react-hook-form';
import { Typography } from 'antd';

interface Props {
	fieldState: ControllerFieldState;
}

const ErrorMessage: React.FC<Props> = ({ fieldState: { error, invalid } }) => {
	if (invalid && error?.message !== undefined) {
		return (
			<Typography.Text type={ 'danger' }>
				{ error?.message }
			</Typography.Text>
		);
	}

	return null;
};

export default React.memo(ErrorMessage);
