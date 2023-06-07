export const mapSuggestDataToOptions = (data: ymaps.ISuggestResult[]) => {
	return data.map(suggest => ({
		label: suggest.displayName,
		value: suggest.value,
	}));
};
