export interface IPaginatedResult<ItemType> {
	items: ItemType[];
	message: string;
	next_page: number;
	page: number;
	pages: number;
	previous_page: number;
	size: number;
	total: number;
}
