import { useEditWorkspaceMutation, useGetWorkspaceByIdQuery } from '../../../redux';
import { useLocation } from 'react-router-dom';
import { type IAddWorkspaceFormValues } from '../../../form/schemas/addWorkspaceSchema';
import { useEffect } from 'react';
import { prepareEditData } from '../consts';
import { useDictionaries } from '../../../hooks';
import { message } from 'antd';

export const useEditWorkspace = (
	reset?: (values?: IAddWorkspaceFormValues) => void,
	isEdit?: boolean,
) => {
	const workspaceId = useLocation()?.pathname?.split('/')?.[2];

	const { data, isLoading: isGetting } = useGetWorkspaceByIdQuery({ id: workspaceId }, { skip: !isEdit });
	const [editWorkspace, { isLoading: isEditing }] = useEditWorkspaceMutation();
	const { parametersDictionary, isLoading: isDictionaryLoading } = useDictionaries();

	const isLoading = isGetting || isEditing || isDictionaryLoading;

	useEffect(() => {
		if (!data?.data || !reset || !parametersDictionary || isLoading) {
			return;
		}

		reset(prepareEditData(data.data, parametersDictionary));
	}, [reset, data?.data, isLoading, parametersDictionary]);

	useEffect(() => {
		if (isGetting) {
			void message.loading('Значения формы загружаются...');
		}
	}, [isGetting]);

	return { isLoading, editWorkspace };
};
