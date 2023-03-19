import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { type PropsWithChildren, useCallback } from 'react';
import Link, { type LinkProps } from 'antd/es/typography/Link';

interface Props extends LinkProps {
	to: string;
	active?: boolean;
}

const BreadcrumbItem: React.FC<PropsWithChildren<Props>> = ({ to, active = false, children, ...rest }) => {
	const navigate = useNavigate();

	const handleNavigateTo = useCallback(() => {
		navigate(to);
	}, [to, navigate]);

	return (
		<Link
			onClick={handleNavigateTo}
			color={active ? 'text.primary' : 'inherit'}
			{...rest}
		>
			{children}
		</Link>
	);
};

export default React.memo(BreadcrumbItem);
