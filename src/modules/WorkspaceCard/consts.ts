import { type ITariff } from '../../types';
import _ from 'lodash';
import { TARIFF_INTERVALS } from '../../mocks/tariff_intervals';
import type dayjs from 'dayjs';
require('dayjs/locale/ru');

export const getMinTariff = (tariffs?: ITariff[]): ITariff | undefined => {
	if (!tariffs) {
		return undefined;
	}
	const sorted = _.sortBy(tariffs, 'cost');
	return sorted[0];
};

export const getTariffLabel = (tariff?: ITariff): string | undefined => {
	return TARIFF_INTERVALS?.find((tariffToFind) => tariffToFind.code_name === tariff?.interval)?.name;
};

export const getFormattedDate = (date?: dayjs.Dayjs): string => {
	return date?.locale('ru').format('HH:mm D MMMM') || '...';
};

export const getFormattedDateShort = (date?: dayjs.Dayjs): string => {
	return date?.locale('ru').format('DD:MM:YYYY') || '...';
};
