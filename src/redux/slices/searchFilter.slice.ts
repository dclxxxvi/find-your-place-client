import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IBaseType } from '../../types';

export interface SearchFilterState {
	search?: string;
	format?: IBaseType;
	cost?: IBaseType;
	params?: IBaseType[];
	rooms?: string[];
	additional?: string[];
	features?: string[];
}

const initialState: SearchFilterState = {
	search: undefined,
	format: undefined,
	cost: undefined,
	params: [],
	rooms: [],
	additional: [],
	features: [],
};

type TFilterValueType = SearchFilterState[keyof SearchFilterState];
export type TFilterFieldType = keyof SearchFilterState;

interface UpdateFilterPayload {
	field: TFilterFieldType;
	value: TFilterValueType;
}

const searchFilterSlice = createSlice({
	name: 'searchFilter',
	initialState,
	reducers: {
		updateFilter(state: SearchFilterState, { payload }: PayloadAction<UpdateFilterPayload>) {
			state[payload.field] = payload.value as any; // поправить типизацию
		},
	},
});

export const { updateFilter } = searchFilterSlice.actions;
export const searchFilterReducer = searchFilterSlice.reducer;
