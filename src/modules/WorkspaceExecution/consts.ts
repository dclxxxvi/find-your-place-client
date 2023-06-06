/* eslint-disable @typescript-eslint/naming-convention */
import { type IExecuteVisitationFormValues } from '../../form/schemas/executeVisitation';
import { type IVIsitationCreation } from '../../types/IVisitation';

export const prepareValues = (
	values: IExecuteVisitationFormValues,
	workspace_id: string,
	user_id: string): IVIsitationCreation => {
	return {
		workspace_id,
		user_id,
		start_date: values.dates[0].toDate().toISOString().replace('Z', ''),
		end_date: values.dates[1].toDate().toISOString().replace('Z', ''),
	};
};
