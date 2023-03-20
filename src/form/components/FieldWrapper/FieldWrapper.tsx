import * as React from 'react';
import { Space } from 'antd';
import { type PropsWithChildren } from 'react';

const FieldWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Space direction={'vertical'} style={{ display: 'flex' }}>
			{children}
		</Space>
	);
};

export default React.memo(FieldWrapper);
