import * as React from 'react';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Suspense } from 'react';
import { type IWorkspace } from '../../../types';
import { Card, Skeleton } from 'antd';

const Desktop = React.lazy(async() => await import('./WorkspaceCardDesktop'));
const Mobile = React.lazy(async() => await import('./WorkspaceCardMobile'));

interface Props {
	workspace: IWorkspace;
}

const WorkspaceCard: React.FC<Props> = (props) => {
	const { lg } = useBreakpoint(true);
	return (
		<Suspense fallback={<Card><Skeleton active /></Card>}>
			{lg ? <Desktop {...props} /> : <Mobile {...props}/> }
		</Suspense>
	);
};

export default WorkspaceCard;
