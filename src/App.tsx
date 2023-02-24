import React from 'react';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from './redux';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

export default App;
