import * as React from 'react';
import { type PropsWithChildren } from 'react';
import { Breadcrumb as BreadcrumbAntD, type BreadcrumbProps } from 'antd';

const Breadcrumbs: React.FC<PropsWithChildren<BreadcrumbProps>> = ({ children, ...rest }) => {
	return (
		<BreadcrumbAntD {...rest}>
			{children}
		</BreadcrumbAntD>
	);
};

export default React.memo(Breadcrumbs);
