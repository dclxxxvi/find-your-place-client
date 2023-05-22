import {
	type SearchFilterState, type TFilterFieldType, updateFilter, useAppDispatch,
	useAppSelector,
} from '../../../redux';
import { type ChangeEvent, useCallback } from 'react';
import { type IBaseType } from '../../../types';

interface UseSearchFilterReturn {
	handleSelectChange: (filterName: TFilterFieldType) => (value?: IBaseType) => void;
	handleMultipleSelectChange: (filterName: TFilterFieldType) => (value?: IBaseType[]) => void;
	handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	filterValues: SearchFilterState;
}

export const useSearchFilter = (): UseSearchFilterReturn => {
	const dispatch = useAppDispatch();
	const filterValues = useAppSelector(state => state.searchFilterReducer);

	const handleSelectChange = useCallback((filterName: TFilterFieldType) => (value?: IBaseType) => {
		dispatch(updateFilter({ field: filterName, value }));
	}, [dispatch]);

	const handleMultipleSelectChange = useCallback((filterName: TFilterFieldType) => (value?: IBaseType[]) => {
		dispatch(updateFilter({ field: filterName, value }));
	}, [dispatch]);

	const handleSearchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		dispatch(updateFilter({ field: 'search', value: e.target.value }));
	}, [dispatch]);

	return {
		handleSelectChange,
		handleMultipleSelectChange,
		handleSearchInputChange,
		filterValues,
	};
};
