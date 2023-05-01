export enum ETagTypes {
	WORKSPACES = 'Workspaces',
	USER_WORKSPACES = 'UserWorkspaces',
	TARIFFS = 'Tariffs',
	USER = 'User',
	DICTIONARIES = 'Dictionaries',
}

export const tagTypes = [
	ETagTypes.WORKSPACES,
	ETagTypes.USER_WORKSPACES,
	ETagTypes.TARIFFS,
	ETagTypes.USER,
	ETagTypes.DICTIONARIES,
];

export function getFromFormData(formData: FormData, key: string): string {
	const value = formData.get(key);
	if (typeof value === 'string') {
		return value;
	}
	return '';
}
