import { type IAddress, type IWorkspace } from '../../types';
import { type IAddWorkspaceFormValues } from '../../form/schemas/addWorkspaceSchema';
import { type ParametersDictionary } from '../../hooks/useDictionaries';

export const mapGeocodeToAddress = (geocodeResult: ymaps.IGeocodeResult, addressString: string): IAddress => {
	const geoObject = geocodeResult.geoObjects.get(0);
	const geometry: any | null = geoObject.geometry; // TODO: в типе geometry нет нужного метода поэтому делаем тип any
	const coordinates = geometry?.getCoordinates();

	return {
		location_value: addressString,
		latitude: coordinates[0],
		longitude: coordinates[1],
	};
};

export const prepareEditData = (
	workspace: IWorkspace,
	dictionaries: ParametersDictionary[],
): IAddWorkspaceFormValues => {
	const parametersToAdd = dictionaries
		?.map((dict) => dict?.dictionary
			?.filter((param) => workspace?.parameters
				?.find((p) => p?.id === param?.id))
			?.map(param => param?.code_name),
		);

	return {
		...workspace,
		parametersToAdd,
		agree: false,
	};
};
