import * as React from 'react';
import { Box, FormHelperText, IconButton, Stack, styled, Typography } from '@mui/material';
import { Controller, useController, useFormContext } from 'react-hook-form';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ImageConfig } from './FileConfig';
import { Delete } from '@mui/icons-material';
import uploadImage from './assets/cloud-upload.png';

interface Props {
	limit: number;
	multiple: boolean;
	name: string;
}

const CustomBox = styled(Box)({
	'&.MuiBox-root': {
		backgroundColor: '#fff',
		borderRadius: '2rem',
		boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
		padding: '1rem',
	},
	'&.MuiBox-root:hover, &.MuiBox-root.dragover': {
		opacity: 0.6,
	},
});

const FileUpload: React.FC<Props> = ({ limit, multiple, name }) => {
	const {
		control,
		formState: { isSubmitting, errors },
	} = useFormContext();

	const { field } = useController({ name, control });
	const [singleFile, setSingleFile] = useState<File[]>([]);
	const [fileList, setFileList] = useState<File[]>([]);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const onDragEnter = (): void => wrapperRef.current?.classList.add('dragover');
	const onDragLeave = (): void => wrapperRef.current?.classList.remove('dragover');

	const onFileDrop = useCallback((e: React.SyntheticEvent<EventTarget>) => {
		const target = e.target as HTMLInputElement;
		if (target.files == null) return;

		if (limit === 1) {
			const newFile = Object.values(target.files).map((file: File) => file);
			if (singleFile.length >= 1) {
				// alert('Only a single image allowed');
				return;
			}
			setSingleFile(newFile);
			field.onChange(newFile[0]);
		}

		if (multiple) {
			const newFiles = Object.values(target.files).map((file: File) => file);
			const updatedList = [...fileList, ...newFiles];
			if (updatedList.length > limit || newFiles.length > 3) {
				alert(`Image must not be more than ${limit}`); return;
			}
			setFileList(updatedList);
			field.onChange(updatedList);
		}
	}, [field, fileList, limit, multiple, singleFile],
	);

	const fileRemove = (file: File): void => {
		const updatedList = [...fileList];
		updatedList.splice(fileList.indexOf(file), 1);
		setFileList(updatedList);
	};

	const fileSingleRemove = (): void => {
		setSingleFile([]);
	};

	type FileTypes = 'jpg' | 'png' | 'svg';

	const calcSize = (size: number): string => {
		return size < 1000000
			? `${Math.floor(size / 1000)} KB`
			: `${Math.floor(size / 1000000)} MB`;
	};

	useEffect(() => {
		if (isSubmitting) {
			setFileList([]);
			setSingleFile([]);
		}
	}, [isSubmitting]);

	return (
		<>
			<CustomBox>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					sx={{
						position: 'relative',
						width: '100%',
						height: '13rem',
						border: '2px dashed #4267b2',
						borderRadius: '20px',
					}}
					ref={wrapperRef}
					onDragEnter={onDragEnter}
					onDragLeave={onDragLeave}
					onDrop={onDragLeave}
				>
					<Stack justifyContent='center' sx={{ p: 1, textAlign: 'center' }}>
						<Typography sx={{ color: '#ccc' }}>
							{limit > 1 ? 'Browse files to upload' : 'Browse file to upload'}
						</Typography>
						<div>
							<img
								src={uploadImage}
								alt='file upload'
								style={{ width: '5rem' }}
							/>
						</div>
						<Typography variant='body1' component='span'>
							<strong>Supported Files</strong>
						</Typography>
						<Typography variant='body2' component='span'>
							JPG, JPEG, PNG
						</Typography>
					</Stack>
					<Controller
						name={name}
						defaultValue=''
						control={control}
						render={({ field: { name: inputName, onBlur, ref } }) => (
							<input
								type='file'
								name={inputName}
								onBlur={onBlur}
								ref={ref}
								onChange={onFileDrop}
								multiple={multiple}
								accept='image/jpg, image/png, image/jpeg'
								style={{
									opacity: 0,
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
									cursor: 'pointer',
								}}
							/>
						)}
					/>
				</Box>
			</CustomBox>

			<FormHelperText
				sx={{ textAlign: 'center', my: 1 }}
				error={!(errors[name] == null)}
			>
				{(errors[name] != null) ? (errors[name]?.message as unknown as string) : ''}
			</FormHelperText>

			{fileList.length > 0 || singleFile.length > 0
				? (
					<Stack spacing={2} sx={{ my: 2 }}>
						{(multiple ? fileList : singleFile).map((item, index) => {
							const imageType = item.type.split('/')[1] as FileTypes;
							return (
								<Box
									key={index}
									sx={{
										position: 'relative',
										backgroundColor: '#f5f8ff',
										borderRadius: 1.5,
										p: 0.5,
									}}
								>
									<Box display='flex'>
										<img
											src={ImageConfig[`${imageType}`]?.length !== 0
												? ImageConfig[`${imageType}`]
												: ImageConfig.default}
											alt='upload'
											style={{
												height: '3.5rem',
												objectFit: 'contain',
											}}
										/>
										<Box sx={{ ml: 1 }}>
											<Typography>{item.name}</Typography>
											<Typography variant='body2'>
												{calcSize(item.size)}
											</Typography>
										</Box>
									</Box>
									<IconButton
										onClick={() => { multiple ? fileRemove(item) : fileSingleRemove(); } }
										sx={{
											color: '#df2c0e',
											position: 'absolute',
											right: '1rem',
											top: '50%',
											transform: 'translateY(-50%)',
										}}
									>
										<Delete />
									</IconButton>
								</Box>
							);
						})}
					</Stack>
				)
				: null}
		</>
	);
};

export default FileUpload;
