import * as React from 'react';
import { Modal, Space } from 'antd';
import { type IWorkspace } from '../../types';
import FeedbackForm from './components/FeedbackForm';

interface Props {
	open: boolean;
	handleClose: () => void;
	workspace: IWorkspace;
}

const FeedbackModal: React.FC<Props> = ({ open, handleClose, workspace }) => {
	return (
		<Modal width={900} open={open} footer={null} onCancel={handleClose} title={'Добавление отзыва'}>
			<Space direction={'vertical'} size={'large'} style={{ display: 'flex', width: '100%' }} >
				<FeedbackForm workspace={workspace} handleClose={handleClose} />
			</Space>
		</Modal>
	);
};

export default FeedbackModal;
