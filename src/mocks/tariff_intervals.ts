import { type IBaseType } from '../types';

export const TARIFF_INTERVALS: IBaseType[] = [
	{ name: 'час', code_name: 'hour' },
	{ name: 'день', code_name: 'day' },
	{ name: 'неделю', code_name: 'week' },
	{ name: 'месяц', code_name: 'month' },
	{ name: 'год', code_name: 'year' },
].map((mock, index) => {
	return {
		...mock,
		id: String(index),
		category_id: String(index),
		created_at: new Date(),
		updated_at: new Date(),
		icon_link: '',
		sort_order: '',
		number_value: '',
	};
});
