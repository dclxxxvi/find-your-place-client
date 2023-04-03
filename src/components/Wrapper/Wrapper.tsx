import * as React from 'react';
import { Col, Row } from 'antd';
import { type PropsWithChildren } from 'react';

export interface WrapperProps extends PropsWithChildren {
	xs: number;
	sm: number;
	md: number;
	lg: number;
	xl: number;
	xxl: number;
	marginTop?: number;
	marginBottom?: number;
}

const Wrapper: React.FC<WrapperProps> = ({
	children,
	marginTop = 0,
	marginBottom = 0,
	...props
}) => {
	return (
		<Row style={{ marginTop, marginBottom }} wrap={false}>
			<Col {...props}/>
			<Col flex={'auto'} style={{ marginLeft: 8, marginRight: 8 }}>{children}</Col>
			<Col {...props}/>
		</Row>
	);
};

export default React.memo(Wrapper);
