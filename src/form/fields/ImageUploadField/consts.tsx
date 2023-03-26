import { PlusOutlined } from '@ant-design/icons';
import * as React from 'react';
import { type RcFile } from 'antd/es/upload';
import { type UploadFile } from 'antd';

export const renderUploadButton = (
	<div>
		<PlusOutlined />
		<div style={{ marginTop: 8 }}>Upload</div>
	</div>
);

export const preventDefaultRequest = (options: any) => {
	setTimeout(() => {
		options?.onSuccess('ok');
	}, 0);
};

export const getBase64 = async(file: RcFile): Promise<string> => {
	return await new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});
};

export const getPreviewImage = (preview?: UploadFile): string | undefined => {
	if (preview?.url != null) {
		return preview.url;
	}
	if (preview?.preview != null) {
		return preview.preview;
	}
};
