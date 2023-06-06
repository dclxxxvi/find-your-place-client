import * as React from 'react';
import { Space } from 'antd';
import Typography from 'antd/es/typography';

interface Props {
	locationValue: string;
}

const Address: React.FC<Props> = ({ locationValue }) => {
	if (!locationValue) {
		return null;
	}

	return (
		<Typography.Link>
			<Space align='center'>
				<span
					className="material-symbols-outlined"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '2px',
						boxSizing: 'content-box',
					}}
				>
					location_on
				</span>
				{locationValue}
			</Space>
		</Typography.Link>
	);
};

export default React.memo(Address);
