import * as React from 'react';
import { Link, type LinkProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { type PropsWithChildren, useCallback } from 'react';

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
			underline={'hover'}
			color={active ? 'text.primary' : 'inherit'}
			sx={{ cursor: 'pointer' }}
			{...rest}
		>{children}
		</Link>
	);
};

export default React.memo(BreadcrumbItem);
