import * as React from 'react';
import { type FallbackProps } from 'react-error-boundary';
import { Content } from 'antd/es/layout/layout';
import { PageWrapper } from '../../components';
import { Alert, Button } from 'antd';

const ErrorPage: React.FC<FallbackProps> = (props) => {
	return (
		<Content>
			<PageWrapper marginBottom={24} marginTop={24}>
				<Alert
					style={{ flexDirection: 'column', gap: 24 }}
					type={'error'}
					message={props.error.name ?? 'Произошла ошибка'}
					description={props.error.message ?? 'Произошла неизвестная ошибка, перезагрузите страницу'}
					action={<Button onClick={() => location.reload()}>Перезагрузить страницу</Button>}
				/>
			</PageWrapper>
		</Content>
	);
};

export default ErrorPage;
