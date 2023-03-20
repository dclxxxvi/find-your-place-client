import * as React from 'react';
import { type ReactNode } from 'react';
import { Typography } from 'antd';

interface Props {
	label?: ReactNode;
}

const Label: React.FC<Props> = ({ label }) => {
	if (label !== undefined) {
		return <Typography.Text>{ label }</Typography.Text>;
	}
	return null;
};

export default React.memo(Label);
