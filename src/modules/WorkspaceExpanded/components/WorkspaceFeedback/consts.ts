import { type IComment } from '../../../../types/IComment';

export const getRatingCounter = (comments: IComment[]) => {
	const ratings = [0, 0, 0, 0, 0];

	comments.forEach((comment) => {
		if (comment.rating === 1) {
			ratings[0] += 1;
		}
		if (comment.rating === 2) {
			ratings[1] += 1;
		}
		if (comment.rating === 3) {
			ratings[2] += 1;
		}
		if (comment.rating === 4) {
			ratings[3] += 1;
		}
		if (comment.rating === 5) {
			ratings[4] += 1;
		}
	});

	return ratings;
};

export const getFeedbackPluralForm = (count: number): string => {
	if (count % 10 === 1 && count !== 11) {
		return 'отзыв';
	} else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
		return 'отзыва';
	} else {
		return 'отзывов';
	}
};
