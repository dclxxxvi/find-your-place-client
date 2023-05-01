import * as React from 'react';
import { type ReactNode, useCallback, useState } from 'react';
import FieldWrapper from '../../components/FieldWrapper';
import Label from '../../components/Label';
import { Modal, notification, Upload, type UploadFile, type UploadProps } from 'antd';
import ErrorMessage from '../../components/ErrorMessage';
import { Controller, type ControllerProps } from 'react-hook-form';
import { type UploadChangeParam } from 'antd/es/upload';
import { getBase64, getPreviewImage, renderUploadButton } from './consts';
import ImgCrop, { type ImgCropProps } from 'antd-img-crop';
import { type IResponse } from '../../../types';
import { type IImageMedia } from '../../../types/IImageMedia';
import { type AxiosResponse } from 'axios';

// TODO: нужен рефакторинг компонента

type ImageMediaResponse = IResponse<IImageMedia>;
type ImageUploadFile = UploadFile<AxiosResponse<ImageMediaResponse>>;
type ImageUploadChangeParam = UploadChangeParam<ImageUploadFile>;
type ImageUploadProps = UploadProps<ImageMediaResponse>;

type ExcludedUploadProps =
	keyof ControllerProps | 'children' | 'defaultFileList' | 'fileList' | 'customRequest' | 'onPreview';

interface Props extends Omit<ImageUploadProps, ExcludedUploadProps>, Omit<ImgCropProps, 'children'> {
	name: string;
	uploadName: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const ImageUploadField: React.FC<Props> = ({
	name,
	uploadName,
	label,
	control,
	maxCount = 10,
	...rest
}) => {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [preview, setPreview] = useState<ImageUploadFile | undefined>(undefined);
	const [fileList, setFileList] = useState<ImageUploadFile[]>([]);

	const handleClosePreview = useCallback(() => setPreviewOpen(false), []);

	const handlePreview = useCallback(async(file: ImageUploadFile) => {
		if (file.url == null && file.preview == null && file.originFileObj != null) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreview(file);
		setPreviewOpen(true);
	}, []);

	const handleChange = (inputOnChange: (value: IImageMedia[]) => void) => (values: ImageUploadChangeParam) => {
		const fileListToChange = values.fileList
			.filter(file => file.response)
			.map(file => file.response?.data.media) as IImageMedia[];
		inputOnChange(fileListToChange);
		setFileList(values.fileList);
		if (values.file.status === 'error') {
			notification.error({
				message: 'Произошла ошибка',
				description: 'Произошла ошибка при загрузке файла...',
			});
		}
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<ImgCrop {...rest}>
						<Upload
							name={uploadName}
							headers={{ authorization: localStorage?.getItem('access-token') || '' }}
							fileList={fileList}
							onPreview={handlePreview}
							onChange={handleChange(field.onChange)}
							{...rest}
						>
							{fileList.length < maxCount && renderUploadButton}
						</Upload>
					</ImgCrop>
					<ErrorMessage fieldState={fieldState} />
					<Modal open={previewOpen} footer={null} title={preview?.name} onCancel={handleClosePreview}>
						<img
							style={{ width: '100%', objectFit: 'cover' }}
							alt="Не удалось загрузить превью"
							src={getPreviewImage(preview)}
						/>
					</Modal>
				</FieldWrapper>
			)}
		/>
	);
};

export default 	React.memo(ImageUploadField);
