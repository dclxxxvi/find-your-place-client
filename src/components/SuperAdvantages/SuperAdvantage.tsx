import * as React from 'react';
import { Row } from 'antd';

interface Props {
	advantage: string;
}

const SuperAdvantage: React.FC<Props> = ({ advantage }) => {
	const googleIcon: JSX.Element = <span className="material-symbols-outlined">{advantage}</span>;
	return (
		<Row align={'middle'} >
			{googleIcon} {advantage}
		</Row>
	);
};

export default SuperAdvantage;
