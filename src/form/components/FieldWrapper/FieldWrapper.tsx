import * as React from 'react';
import { Space, type SpaceProps } from 'antd';

interface Props extends SpaceProps {}

const FieldWrapper: React.FC<Props> = ({ children, ...rest }) => {
	return (
		<Space direction={'vertical'} style={{ display: 'flex' }} {...rest}>
			{children}
		</Space>
	);
};

export default React.memo(FieldWrapper);
