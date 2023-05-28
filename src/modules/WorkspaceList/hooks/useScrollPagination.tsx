import { useEffect, useState } from 'react';

export const useScrollPagination = (isFetching: boolean) => {
	const [page, setPage] = useState(1);

	useEffect(() => {
		const onScroll = () => {
			const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			if (scrolledToBottom && !isFetching) {
				setPage(page + 1);
			}
		};

		document.addEventListener('scroll', onScroll);

		return () => document.removeEventListener('scroll', onScroll);
	}, [page, isFetching]);

	return {
		page,
	};
};
