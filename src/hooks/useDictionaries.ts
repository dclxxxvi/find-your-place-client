import { useGetCategoriesQuery, useGetParametersQuery } from '../redux/api/service.api';
import { useMemo } from 'react';
import { type IBaseType } from '../types';

interface ParametersDictionary {
	category: IBaseType;
	dictionary: IBaseType[];
}

interface UseDictionariesReturn {
	parametersDictionary: ParametersDictionary[];
	isLoading: boolean;
}

export const useDictionaries = (): UseDictionariesReturn => {
	const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesQuery(null);
	const { data: dictionary, isLoading: isDictionaryLoading } = useGetParametersQuery(null);

	const parametersDictionary = useMemo(() => {
		if (!categories || !dictionary) {
			return [];
		}

		return categories.map((category) => ({
			category,
			dictionary: dictionary.filter(dict => dict.category_id === category.id),
		}));
	}, [categories, dictionary]);

	const isLoading = isCategoriesLoading || isDictionaryLoading;

	return {
		parametersDictionary,
		isLoading,
	};
};
