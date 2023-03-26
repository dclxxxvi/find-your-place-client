export enum ETagTypes {
	WORKSPACES = 'Workspaces',
	TARIFFS = 'Tariffs',
}

export const tagTypes = [ETagTypes.WORKSPACES, ETagTypes.TARIFFS];

export function getFromFormData(formData: FormData, key: string): string {
	const value = formData.get(key);
	if (typeof value === 'string') {
		return value;
	}
	return '';
}
