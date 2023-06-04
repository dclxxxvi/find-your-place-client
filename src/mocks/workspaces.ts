import { type IBaseType, type IWorkspace } from '../types';
import { toInteger } from 'lodash';
import wsImage from './img.png';
import { type IMedia } from '../types/IMedia';

export const workspaceMocks: IWorkspace[] = Array.from({ length: 10 }).map((_, index) => ({
	id: String(index),
	title: `Коворкинг ${index}`,
	description: `коворинг под номером ${index} 
	коворинг под номером ${index} коворинг под номером ${index} 
	коворинг под номером ${index} коворинг под номером ${index} 
	коворинг под номером ${index} коворинг под номером ${index}`,
	phone_number: `8932332${toInteger(Math.random() * 11234)}`,
	site_url: `http:/example/coworking${index}`,
	rating: Math.random() * 5,
	feedback_count: toInteger(Math.random() * 1000),
	approved: true,
	images: Array.from({ length: 5 }).map((__, imageindex) => ({
		id: String(imageindex),
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		media: {
			workspace_id: String(imageindex),
			media_id: String(imageindex),
			link: wsImage,
			createdAt: new Date(),
			updatedAt: new Date(),
		} as IMedia,
	})),
	latitude: 56.836927 + Math.random() * 0.2 - 0.1,
	longitude: 60.599308 + Math.random() * 0.2 - 0.1,
	location_value: `ул. Пушкина ${toInteger(Math.random() * 98)}, д. Колотушкина ${toInteger(Math.random() * 112)}`,
	createdAt: new Date(),
	updatedAt: new Date(),
	comments: [],
	parameters: [],
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	status: {
		name: 'Подтверждено',
		code_name: 'approved',
		tag: 'workspace_status',
		id: '9af4bc80-57ad-4188-b0fa-58683dcf3070',
	} as unknown as IBaseType,
}));
