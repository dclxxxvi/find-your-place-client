import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalSearchFilter, Navbar, PersonalCabinetLayout } from '../layouts';
import {
	AddWorkspace,
	Workspace,
	Workspaces,
	Main,
	MapSearch,
	NotFound,
	SuggestedPlaces,
	UserData,
	VisitationHistory, Bonuses, Purchases, WorkspaceExecution,
} from '../pages';
import { PersonalCabinetRoutes } from './routes';
import PrivateRoute from './PrivateRoute';

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Navbar />}>
					<Route index element={<Main />}/>
					<Route element={<GlobalSearchFilter />}>
						<Route path={'workspaces'} >
							<Route index element={<Workspaces />}/>
							<Route path={':id'}>
								<Route index element={<Workspace />}/>
								<Route
									path={'execution'}
									element={ <PrivateRoute><WorkspaceExecution /></PrivateRoute>}
								/>
							</Route>
							<Route path={'map'} element={<MapSearch />}/>
							<Route path={'new'} element={<PrivateRoute><AddWorkspace /></PrivateRoute>}/>
						</Route>
						<Route
							path={PersonalCabinetRoutes.PROFILE}
							element={<PrivateRoute><PersonalCabinetLayout /></PrivateRoute>}
						>
							<Route path={PersonalCabinetRoutes.USER_DATA} element={<UserData />}/>
							<Route path={PersonalCabinetRoutes.BONUSES} element={<Bonuses />}/>
							<Route path={PersonalCabinetRoutes.PURCHASES} element={<Purchases />}/>
							<Route path={PersonalCabinetRoutes.SUGGESTED_PLACES} element={<SuggestedPlaces />}/>
							<Route path={PersonalCabinetRoutes.VISITATION_HISTORY} element={<VisitationHistory />}/>
						</Route>
					</Route>
					<Route path={'*'} element={<NotFound />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
