import * as React from 'react';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Suspense } from 'react';
import { type IWorkspace } from '../../../types';
import { Card, Skeleton } from 'antd';

const Desktop = React.lazy(async() => await import('./SuggestedWorkspaceCardDesktop'));
const Mobile = React.lazy(async() => await import('./SuggestedWorkspaceCardMobile'));

interface Props {
	workspace: IWorkspace;
}

const SuggestedWorkspaceCard: React.FC<Props> = (props) => {
	const { xl } = useBreakpoint(true);
	return (
		<Suspense fallback={<Card><Skeleton active /></Card>}>
			{xl ? <Desktop {...props} /> : <Mobile {...props}/> }
		</Suspense>
	);
};

export default SuggestedWorkspaceCard;
