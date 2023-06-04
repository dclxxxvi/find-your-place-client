import * as React from 'react';
import { Carousel, Image } from 'antd';
import { type IImageMedia } from '../../../types/IMedia';

interface Props {
	images: IImageMedia[];
	showOne?: boolean;
}

const ImageCarousel: React.FC<Props> = ({ images, showOne }) => {
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

	return (
		<Carousel>
			{ images.map((image) =>
				<Image
					key={ image.id }
					src={ image.media.link }
					width={ '100%' }
					height={ '100%' }
					style={{ objectFit: 'cover' }}
				/>,
			) }
		</Carousel>
	);
};

export default React.memo(ImageCarousel);
