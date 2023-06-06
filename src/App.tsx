import React from 'react';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from './redux';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './pages';
import { Layout } from 'antd';
import ThemeProvider from './providers/theme';
import { YMaps } from '@pbe/react-yandex-maps';
import './App.css';

const App: React.FC = () => {
	return (
		<ErrorBoundary fallbackRender={ErrorPage}>
			<Provider store={store}>
				<ThemeProvider>
					<YMaps query={{ lang: 'ru_RU', apikey: process.env.REACT_APP_YMAPS_API_KEY }}>
						<Layout>
							<AppRouter />
						</Layout>
					</YMaps>
				</ThemeProvider>
			</Provider>
		</ErrorBoundary>
	);
};

export default App;
