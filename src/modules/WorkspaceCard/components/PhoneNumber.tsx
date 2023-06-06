import * as React from 'react';
import { Space } from 'antd';
import Typography from 'antd/es/typography';

interface Props {
	phoneNumber: string;
}

const copyNumber = (phoneNumber: string) => async(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
	if (event) {
		event.stopPropagation();
	}
	await navigator.clipboard.writeText(phoneNumber);
};

const PhoneNumber: React.FC<Props> = ({ phoneNumber }) => {
	if (!phoneNumber) {
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
					call
				</span>
				{phoneNumber}
				<span
					className="material-symbols-outlined"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '2px',
						boxSizing: 'content-box',
					}}
					onClick={copyNumber(phoneNumber)}
				>
					content_copy
				</span>
			</Space>
		</Typography.Link>
	);
};

export default React.memo(PhoneNumber);
