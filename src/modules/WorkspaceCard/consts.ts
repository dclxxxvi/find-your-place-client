import { type ITariff } from '../../types';
import _ from 'lodash';
import { TARIFF_INTERVALS } from '../../mocks/tariff_intervals';
import type dayjs from 'dayjs';
import { type TInterval } from '../../types/TInterval';
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

export const getFormattedDate = (date?: dayjs.Dayjs, interval?: TInterval): string => {
	if (!date) {
		return '...';
	}

	if (interval === 'hour') {
		return date.locale('ru').format('HH:mm D MMMM');
	}

	if (interval === 'month' || interval === 'year') {
		return date.locale('ru').format('D MMMM YYYY');
	}

	if (interval === 'week' || interval === 'day') {
		return date.locale('ru').format('D MMMM');
	}

	return date.locale('ru').format('HH:mm D MMMM');
};

export const getFormattedDateShort = (date?: dayjs.Dayjs): string => {
	return date?.locale('ru').format('HH:mm DD:MM:YYYY') || '...';
};
