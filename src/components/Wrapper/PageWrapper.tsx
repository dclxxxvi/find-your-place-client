import * as React from 'react';
import Wrapper, { type WrapperProps } from './Wrapper';

type PageWrapperProps = Omit<WrapperProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>;

const PageWrapper: React.FC<PageWrapperProps> = ({ children, ...rest }) => {
	return (
		<Wrapper { ...rest } xs={0} sm={1} md={1} lg={2} xl={3} xxl={3}>
			{children}
		</Wrapper>
	);
};

export default React.memo(PageWrapper);
