import * as React from 'react';
import { Anchor } from 'antd';
import { EAnchorTabs, EAnchorTabsLabels } from '../consts';

const WorkspaceAnchor: React.FC = () => {
	return (
		<Anchor direction={'horizontal'} items={[
			{
				key: EAnchorTabs.DESCRIPTION,
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				href: `#${EAnchorTabs.DESCRIPTION}`,
				title: EAnchorTabsLabels.DESCRIPTION,
			},
			{
				key: EAnchorTabs.SERVICES,
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				href: `#${EAnchorTabs.SERVICES}`,
				title: EAnchorTabsLabels.SERVICES,
			},
			{
				key: EAnchorTabs.MAP,
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				href: `#${EAnchorTabs.MAP}`,
				title: EAnchorTabsLabels.MAP,
			},
			{
				key: EAnchorTabs.CONTACTS,
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				href: `#${EAnchorTabs.CONTACTS}`,
				title: EAnchorTabsLabels.CONTACTS,
			},
			{
				key: EAnchorTabs.TARIFFS,
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				href: `#${EAnchorTabs.TARIFFS}`,
				title: EAnchorTabsLabels.TARIFFS,
			},
			{
				key: EAnchorTabs.FEEDBACK,
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				href: `#${EAnchorTabs.FEEDBACK}`,
				title: EAnchorTabsLabels.FEEDBACK,
			},
		]}
		/>
	);
};

export default React.memo(WorkspaceAnchor);
