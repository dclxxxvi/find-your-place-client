import React from 'react';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from './redux';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './pages';
import { Layout } from 'antd';
import ThemeProvider from './theme';

const App: React.FC = () => {
	return (
		<ErrorBoundary fallbackRender={ErrorPage}>
			<Provider store={store}>
				<ThemeProvider>
					<Layout>
						<AppRouter />
					</Layout>
				</ThemeProvider>
			</Provider>
		</ErrorBoundary>
	);
};

export default App;
