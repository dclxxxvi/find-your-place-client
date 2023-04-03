import * as yup from 'yup';
import { REQUIRED_FIELD } from './errorMessages';
import { type IComment } from '../../types/IComment';

export interface IAddCommentValues extends IComment {
	agree: boolean;
}

export const addCommentSchema = yup.object<IAddCommentValues>({
	comment: yup.string(),
	advantages: yup.string(),
	disadvantages: yup.string(),
	rating: yup.number().required(REQUIRED_FIELD),
}).required();
