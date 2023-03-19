import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalSearchFilter, Navbar, PersonalCabinetLayout } from '../layouts';
import {
	AddWorkspace,
	Workspace,
	WorkspacesList,
	Main,
	MapSearch,
	NotFound,
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
						<Route path={'workspaces'} >
							<Route index element={<WorkspacesList />}/>
							<Route path={':id'} element={<Workspace />}/>
							<Route path={'map'} element={<MapSearch />}/>
							<Route path={'new'} element={<AddWorkspace />}/>
						</Route>
						<Route path={'profile'} element={<PersonalCabinetLayout />}>
							<Route path={'info'} element={<UserInformation />}/>
							<Route path={'suggested'} element={<SuggestedPlaces />}/>
							<Route path={'visitations'} element={<Visitations />}/>
						</Route>
					</Route>
					<Route path={'*'} element={<NotFound />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
