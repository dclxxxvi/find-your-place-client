import * as React from 'react';
import { Anchor } from 'antd';
import { AnchorTabs, AnchorTabsLabels } from '../consts';

const WorkspaceAnchor: React.FC = () => {
	return (
		<Anchor direction={'horizontal'} items={[
			{
				key: AnchorTabs.DESCRIPTION,
				href: `#${AnchorTabs.DESCRIPTION}`,
				title: AnchorTabsLabels.DESCRIPTION,
			},
			{
				key: AnchorTabs.SERVICES,
				href: `#${AnchorTabs.SERVICES}`,
				title: AnchorTabsLabels.SERVICES,
			},
			{
				key: AnchorTabs.TARIFFS,
				href: `#${AnchorTabs.TARIFFS}`,
				title: AnchorTabsLabels.TARIFFS,
			},
			{
				key: AnchorTabs.FEEDBACK,
				href: `#${AnchorTabs.FEEDBACK}`,
				title: AnchorTabsLabels.FEEDBACK,
			},
		]}
		/>
	);
};

export default React.memo(WorkspaceAnchor);
