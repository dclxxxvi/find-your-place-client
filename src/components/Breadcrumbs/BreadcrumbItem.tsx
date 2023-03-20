import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { type PropsWithChildren, useCallback } from 'react';
import { Breadcrumb, type BreadcrumbItemProps } from 'antd';

interface Props extends Omit<BreadcrumbItemProps, 'onClick' | 'href'> {
	to: string;
}

const BreadcrumbItem: React.FC<PropsWithChildren<Props>> = ({ to, children, ...rest }) => {
	const navigate = useNavigate();

	const handleNavigateTo = useCallback(() => {
		navigate(to);
	}, [to, navigate]);

	return (
		<Breadcrumb.Item href={'javascript:void(0);'} onClick={handleNavigateTo} {...rest} >
			{children}
		</Breadcrumb.Item>
	);
};

export default React.memo(BreadcrumbItem);
