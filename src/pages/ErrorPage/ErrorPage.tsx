import * as React from 'react';
import { type FallbackProps } from 'react-error-boundary';
import { Alert, AlertTitle, Container, Typography } from '@mui/material';

const ErrorPage: React.FC<FallbackProps> = (props) => {
	return (
		<Container maxWidth="sm">
			<Alert severity="error">
				<AlertTitle>{props.error.name}</AlertTitle>
				<Typography variant="body1" gutterBottom>
					{props.error.message}
				</Typography>
			</Alert>
		</Container>
	);
};

export default ErrorPage;
