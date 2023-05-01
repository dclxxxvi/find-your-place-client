import * as React from 'react';
import { type IWorkspace } from '../../../types';
import OverviewWorkspaceCardDesktop from './OverviewWorkspaceCardDesktop';

interface Props {
	workspace: IWorkspace;
}

const OverviewWorkspaceCard: React.FC<Props> = (props) => {
	return <OverviewWorkspaceCardDesktop {...props}/>;
};

export default OverviewWorkspaceCard;
