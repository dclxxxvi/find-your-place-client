export interface IResponse<DataType> {
	data: DataType;
	message: string;
	meta: any;
}
