import * as React from 'react';
import { Modal, Upload, type UploadFile, type UploadProps } from 'antd';
import { type ControllerProps } from 'react-hook-form';
import { type ReactNode, useCallback, useState } from 'react';
import { type UploadChangeParam } from 'antd/es/upload';
import { type ImgCropProps } from 'antd-img-crop';
import {
	getBase64,
	getPreviewImage,
	preventDefaultRequest,
	renderUploadButton,
} from '../../form/fields/ImageUploadField/consts';

type ExcludedUploadProps = keyof ControllerProps | 'children' |
'defaultFileList' | 'fileList' | 'customRequest' | 'action' | 'onPreview';

interface Props extends Omit<UploadProps, ExcludedUploadProps>, Omit<ImgCropProps, 'children'> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
	maxFiles?: number;
}

const ImageUpload: React.FC<Props> = ({
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

	const handleChange = (values: UploadChangeParam) => {
		setFileList(values.fileList);
	};

	return (
		<>
			<Upload
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				customRequest={preventDefaultRequest}
				{...rest}
			>
				{fileList.length < maxFiles && renderUploadButton}
			</Upload>
			<Modal open={previewOpen} footer={null} title={preview?.name} onCancel={handleClosePreview}>
				<img
					style={{ width: '100%', objectFit: 'cover' }}
					alt="Не удалось загрузить превью"
					src={getPreviewImage(preview)}
				/>
			</Modal>
		</>
	);
};

export default React.memo(ImageUpload);

// TODO: выделить логику из ImageUploadField сюда
