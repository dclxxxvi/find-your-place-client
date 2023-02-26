import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalSearchFilter, Navbar, PersonalCabinetLayout } from '../layouts';
import {
	AddCoworking,
	Coworking,
	CoworkingsList,
	Main,
	MapSearch,
	SuggestedPlaces,
	UserInformation,
	Visitations,
} from '../pages';

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Navbar />}>
					<Route index element={<Main />}/>
					<Route element={<GlobalSearchFilter />}>
						<Route path={'coworkings'} >
							<Route index element={<CoworkingsList />}/>
							<Route path={':id'} element={<Coworking />}/>
							<Route path={'map'} element={<MapSearch />}/>
							<Route path={'new'} element={<AddCoworking />}/>
						</Route>
						<Route path={'profile'} element={<PersonalCabinetLayout />}>
							<Route path={'info'} element={<UserInformation />}/>
							<Route path={'suggested'} element={<SuggestedPlaces />}/>
							<Route path={'visitations'} element={<Visitations />}/>
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
