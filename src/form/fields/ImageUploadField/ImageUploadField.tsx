import * as React from 'react';
import FieldWrapper from '../../components/FieldWrapper';
import Label from '../../components/Label';
import { Modal, Upload, type UploadFile, type UploadProps } from 'antd';
import ErrorMessage from '../../components/ErrorMessage';
import { Controller, type ControllerProps } from 'react-hook-form';
import { type ReactNode, useCallback, useState } from 'react';
import { type UploadChangeParam } from 'antd/es/upload';
import { getBase64, getPreviewImage, preventDefaultRequest, renderUploadButton } from './consts';
import ImgCrop, { type ImgCropProps } from 'antd-img-crop';

type ExcludedUploadProps = keyof ControllerProps | 'children' |
'defaultFileList' | 'fileList' | 'customRequest' | 'action' | 'onPreview';

interface Props extends Omit<UploadProps, ExcludedUploadProps>, Omit<ImgCropProps, 'children'> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
	maxFiles?: number;
}

const ImageUploadField: React.FC<Props> = ({
	name,
	label,
	control,
	maxFiles = 10,
	...rest
}) => {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [preview, setPreview] = useState<UploadFile | undefined>(undefined);
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const handleClosePreview = useCallback(() => setPreviewOpen(false), []);

	const handlePreview = useCallback(async(file: UploadFile) => {
		if (file.url == null && file.preview == null && file.originFileObj != null) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreview(file);
		setPreviewOpen(true);
	}, []);

	const handleChange = (inputOnChange: (value: UploadFile[]) => void) => (values: UploadChangeParam) => {
		inputOnChange(values.fileList);
		setFileList(values.fileList);
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
							fileList={field.value}
							onPreview={handlePreview}
							onChange={handleChange(field.onChange)}
							customRequest={preventDefaultRequest}
							{...rest}
						>
							{fileList.length < maxFiles && renderUploadButton}
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

export default React.memo(ImageUploadField);
