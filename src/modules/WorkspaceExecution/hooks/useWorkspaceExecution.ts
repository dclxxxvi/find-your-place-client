import { type Control, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { getTariff } from '../consts';
import { type IWorkspace } from '../../../types';
import { type IExecuteVisitationFormValues } from '../../../form/schemas/executeVisitation';
import type dayjs from 'dayjs';
import { type TInterval } from '../../../types/TInterval';

interface useWorkspaceExecutionReturn {
	startDate?: dayjs.Dayjs;
	endDate?: dayjs.Dayjs;
	totalCost?: number;
	tariffTitle?: string;
	interval?: TInterval;
}

export const useWorkspaceExecution = (
	control: Control<IExecuteVisitationFormValues>,
	workspace?: IWorkspace,
): useWorkspaceExecutionReturn => {
	const tariffId = useWatch({ control, name: 'tariff_id' });
	const dates = useWatch({ control, name: 'dates' });

	const tariff = useMemo(() => getTariff(tariffId, workspace?.tariffs),
		[tariffId, workspace?.tariffs],
	);

	const interval = useMemo(() => {
		return tariff?.interval as TInterval | undefined;
	}, [tariff?.interval]);

	const cost = useMemo(() =>
		tariff?.cost,
	[tariff?.cost]);

	const tariffTitle = useMemo(() =>
		tariff?.title,
	[tariff?.title]);

	const normalizedStartDate = useMemo(() =>
		interval && dates?.[0]?.startOf('hour'),
	[dates, interval]);

	const normalizedEndDate = useMemo(() => {
		if (!interval || !dates?.[1] || !normalizedStartDate) {
			return;
		}

		const endDate = dates[1].startOf('hour');
		let difference = endDate.diff(normalizedStartDate, interval);
		difference += interval === 'hour' ? 0 : 1;

		return normalizedStartDate.add(difference, interval);
	},
	[dates, interval, normalizedStartDate]);

	const totalCost = useMemo(() => {
		if (!interval || !cost || !normalizedStartDate || !normalizedEndDate) {
			return;
		}

		const difference = normalizedEndDate.diff(normalizedStartDate, interval);

		return difference * cost;
	}, [normalizedStartDate, normalizedEndDate, interval, cost]);

	return {
		startDate: normalizedStartDate,
		endDate: normalizedEndDate,
		tariffTitle,
		totalCost,
		interval,
	};
};
