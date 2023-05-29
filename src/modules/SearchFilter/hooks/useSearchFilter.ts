import {
	type SearchFilterState, type TFilterFieldType, updateFilter, useAppDispatch,
	useAppSelector,
} from '../../../redux';
import { type ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../router/routes';

interface UseSearchFilterReturn {
	handleSelectChange: (filterName: TFilterFieldType) => (value?: string) => void;
	handleMultipleSelectChange: (filterName: TFilterFieldType) => (value?: string) => void;
	handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	filterValues: SearchFilterState;
	navigateToWorkspacesPage: () => void;
}

export const useSearchFilter = (): UseSearchFilterReturn => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const filterValues = useAppSelector(state => state.searchFilterReducer);

	const handleSelectChange = useCallback((filterName: TFilterFieldType) => (value?: string) => {
		dispatch(updateFilter({ field: filterName, value }));
	}, [dispatch]);

	const handleMultipleSelectChange = useCallback((filterName: TFilterFieldType) => (value?: string) => {
		dispatch(updateFilter({ field: filterName, value }));
	}, [dispatch]);

	const handleSearchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		dispatch(updateFilter({ field: 'search', value: e.target.value }));
	}, [dispatch]);

	const navigateToWorkspacesPage = useCallback(() => {
		navigate(AppRoutes.WORKSPACES);
	}, [navigate]);

	return {
		handleSelectChange,
		handleMultipleSelectChange,
		handleSearchInputChange,
		filterValues,
		navigateToWorkspacesPage,
	};
};
