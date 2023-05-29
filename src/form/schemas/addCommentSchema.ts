import * as yup from 'yup';
import { REQUIRED_FIELD } from './errorMessages';
import { type IComment } from '../../types/IComment';

export interface IAddCommentValues extends IComment {
	workspace_id: string;
}

export const addCommentSchema = yup.object<IAddCommentValues>({
	text: yup.string().required(REQUIRED_FIELD),
	advantages: yup.string(),
	disadvantages: yup.string(),
	rating: yup.number().required(REQUIRED_FIELD),
}).required();
