import * as React from 'react';
import { Anchor } from 'antd';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';

const WorkspaceAnchor: React.FC = () => {
	return (
		<Anchor direction={'horizontal'} items={[
			{
				key: EAnchorTabs.DESCRIPTION,
				href: `#${EAnchorTabs.DESCRIPTION}`,
				title: EAnchorTabsLabels.DESCRIPTION,
			},
			{
				key: EAnchorTabs.SERVICES,
				href: `#${EAnchorTabs.SERVICES}`,
				title: EAnchorTabsLabels.SERVICES,
			},
			{
				key: EAnchorTabs.MAP,
				href: `#${EAnchorTabs.MAP}`,
				title: EAnchorTabsLabels.MAP,
			},
			{
				key: EAnchorTabs.CONTACTS,
				href: `#${EAnchorTabs.CONTACTS}`,
				title: EAnchorTabsLabels.CONTACTS,
			},
			{
				key: EAnchorTabs.TARIFFS,
				href: `#${EAnchorTabs.TARIFFS}`,
				title: EAnchorTabsLabels.TARIFFS,
			},
			{
				key: EAnchorTabs.FEEDBACK,
				href: `#${EAnchorTabs.FEEDBACK}`,
				title: EAnchorTabsLabels.FEEDBACK,
			},
		]}
		/>
	);
};

export default React.memo(WorkspaceAnchor);
