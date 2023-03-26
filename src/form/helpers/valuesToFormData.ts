function buildFormData(formData: FormData, data: any, parentKey?: string) {
	if (Boolean(data) && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
		Object.keys(data).forEach(key => {
			buildFormData(formData, data[key], parentKey != null ? `${parentKey}[${key}]` : key);
		});
	} else {
		const value = data == null ? '' : data;

		if (parentKey != null) {
			formData.append(parentKey, value);
		}
	}
}

export const valuesToFormData = (data: any): FormData => {
	const formData = new FormData();
	buildFormData(formData, data);
	return formData;
};
