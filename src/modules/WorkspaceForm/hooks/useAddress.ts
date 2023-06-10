import { useYMaps } from '@pbe/react-yandex-maps';
import { mapGeocodeToAddress } from '../consts';
import { notification } from 'antd';

export const useAddress = () => {
	const ymaps = useYMaps(['geocode']);

	return async(addressString: string) => {
		return await ymaps?.geocode(addressString, { results: 1 })
			.then(data => mapGeocodeToAddress(data, addressString))
			.catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При преобразовании адреса произошла ошибка...',
			}));
	};
};
