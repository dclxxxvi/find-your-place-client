export const getStringDate = (date: Date): string => {
	return date.toLocaleDateString();
};

export const getVisitStatus = (startDate?: string, endDate?: string): string | undefined => {
	if (!startDate || !endDate) {
		return;
	}

	const now = new Date();
	const start = new Date(startDate);
	const end = new Date(endDate);

	if (now <= start) {
		return 'Предстоящее';
	} else if (now <= end && now >= start) {
		return 'Активное';
	} else if (now >= end) {
		return 'Прошедшее';
	}
};
