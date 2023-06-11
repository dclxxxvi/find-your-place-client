import { type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceSchema';
import { type IWorkspaceParams } from '../../types';

export enum ETagTypes {
	WORKSPACES = 'Workspaces',
	USER_WORKSPACES = 'UserWorkspaces',
	TARIFFS = 'Tariffs',
	USER = 'User',
	DICTIONARIES = 'Dictionaries',
	COMMENTS = 'Comments',
	VISITATIONS = 'Visitations',
	TRANSACTIONS = 'Transactions',
}

export const tagTypes = [
	ETagTypes.WORKSPACES,
	ETagTypes.USER_WORKSPACES,
	ETagTypes.TARIFFS,
	ETagTypes.USER,
	ETagTypes.DICTIONARIES,
	ETagTypes.COMMENTS,
	ETagTypes.VISITATIONS,
	ETagTypes.TRANSACTIONS,
];

export function getFromFormData(formData: FormData, key: string): string {
	const value = formData.get(key);
	if (typeof value === 'string') {
		return value;
	}
	return '';
}

export const prepareParams = (params: IWorkspaceParams): string => {
	const searchParams = new URLSearchParams();

	Object.entries(params).forEach(([key, param]) => {
		if (typeof param === 'string' || typeof param === 'number') {
			searchParams.append(key, String(param));
		}
		if (typeof param === 'object') {
			param.forEach((p: any) => {
				searchParams.append(key, p);
			});
		}
	});

	return searchParams.toString();
};

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
