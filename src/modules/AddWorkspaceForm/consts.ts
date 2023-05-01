import { type IAddress } from '../../types';

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
