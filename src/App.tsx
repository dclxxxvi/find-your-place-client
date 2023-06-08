import React from 'react';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from './redux';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './pages';
import { ConfigProvider, Layout } from 'antd';
import ThemeProvider from './providers/theme';
import { YMaps } from '@pbe/react-yandex-maps';
import './App.css';
import ruRU from 'antd/locale/ru_RU';

const App: React.FC = () => {
	return (
		<ErrorBoundary fallbackRender={ErrorPage}>
			<Provider store={store}>
				<ConfigProvider locale={ruRU}>
					<ThemeProvider>
						<YMaps query={{ lang: 'ru_RU', apikey: process.env.REACT_APP_YMAPS_API_KEY }}>
							<Layout>
								<AppRouter />
							</Layout>
						</YMaps>
					</ThemeProvider>
				</ConfigProvider>
			</Provider>
		</ErrorBoundary>
	);
};

export default App;
