import { type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceSchema';

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

export const prepareAddWorkspaceBody = (body: IAddWorkspaceFormValues): any => {
	const imagesId = body.images?.map((image) => image.id) || [];

	const parameters: any[] = [];
	body?.parametersToAdd.forEach((parameter) => {
		if (parameter) {
			parameters.push(...parameter);
		}
	});

	return {
		...body,
		images_id: imagesId,
		parameters,
	};
};
