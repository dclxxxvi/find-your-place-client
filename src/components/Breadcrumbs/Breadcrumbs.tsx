import * as React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, type BreadcrumbsProps } from '@mui/material';
import { type PropsWithChildren } from 'react';

const Breadcrumbs: React.FC<PropsWithChildren<BreadcrumbsProps>> = ({ children, ...rest }) => {
	return (
		<MUIBreadcrumbs aria-label="breadcrumb" {...rest}>
			{children}
		</MUIBreadcrumbs>
	);
};

export default React.memo(Breadcrumbs);
