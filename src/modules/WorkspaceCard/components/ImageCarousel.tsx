import * as React from 'react';
import { Carousel, Image } from 'antd';
import { type IImageMedia } from '../../../types/IMedia';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

interface Props {
	images: IImageMedia[];
	showOne?: boolean;
}

const ImageCarousel: React.FC<Props> = ({ images, showOne }) => {
	const { xl } = useBreakpoint(true);
	if (!images || images?.length === 0) {
		return <Image
			width={ '100%' }
			height={ '100%' }
			fallback={'https://placehold.co/600x400?text=Нет+изображения&font=roboto'}
		/>;
	}

	if (images.length === 1 || showOne) {
		return <Image
			key={ images[0].id }
			src={ images[0].media.link }
			width={ '100%' }
			height={ '100%' }
			style={{ objectFit: 'cover' }}
		/>;
	}
	if (!xl) {
		return <Carousel>
			{ images.map((image) =>
				<Image
					key={ image.id }
					src={ image.media.link }
					width={ '100%' }
					height={ '100%' }
					style={{ objectFit: 'cover' }}
				/>,
			) }
		</Carousel>;
	}

	return (
		<Carousel>
			{ images.map((image) =>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					overflow: 'hidden',
					maxHeight: '350px',
				}} key={ image.id }>
					<Image
						src={ image.media.link }
						style={{
							all: 'unset',
							flexShrink: '0',
							minHeight: '100%',
							minWidth: '100%',
							maxHeight: '350px',
						}}
					/>
				</div>,
			) }
		</Carousel>
	);
};

export default React.memo(ImageCarousel);
