import { type IWorkspace } from '../types';
import { toInteger } from 'lodash';
import wsImage from './img.png';

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
	images: [wsImage, wsImage, wsImage, wsImage, wsImage],
	address: {
		latitude: 56.836927 + Math.random() * 0.2 - 0.1,
		longitude: 60.599308 + Math.random() * 0.2 - 0.1,
		value: `ул. Пушкина ${toInteger(Math.random() * 98)}, д. Колотушкина ${toInteger(Math.random() * 112)}`,
	},
	createdAt: new Date(),
	updatedAt: new Date(),
}));
