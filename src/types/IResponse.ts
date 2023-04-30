export interface IResponse<DataType> {
	data: DataType;
	media: DataType;
	message: string;
	meta: any;
}
