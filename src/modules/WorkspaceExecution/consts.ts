/* eslint-disable @typescript-eslint/naming-convention */
import { type IExecuteVisitationFormValues } from '../../form/schemas/executeVisitation';
import { type IVIsitationCreation } from '../../types/IVisitation';
import { type ITariff } from '../../types';

export const prepareValues = (
	values: IExecuteVisitationFormValues,
	workspace_id: string,
	user_id: string,
	total_cost: number,
): IVIsitationCreation => {
	return {
		workspace_id,
		user_id,
		tariff_id: values.tariff_id,
		start_date: values.dates[0].toDate().toISOString().replace('Z', ''),
		end_date: values.dates[1].toDate().toISOString().replace('Z', ''),
		total_cost,
	};
};

export const getTariff = (tariff_id: string, tariffs?: ITariff[]): ITariff | undefined => {
	return tariffs?.find((tariff) => tariff.id === tariff_id);
};
