import * as React from 'react';
import { Carousel, Image } from 'antd';
import { type IImageMedia } from '../../../types/IMedia';

interface Props {
	images: IImageMedia[];
}

const ImageCarousel: React.FC<Props> = ({ images }) => {
	if (!images || images?.length === 0) {
		return <Image
			width={ '100%' }
			height={ '100%' }
			fallback={'https://placehold.co/600x400?text=Нет+изображения&font=roboto'}
		/>;
	}

	return (
		<Carousel autoplay>
			{ images.map((image) =>
				<Image key={ image.id } src={ image.media.link } width={ '100%' } height={ '100%' }/>,
			) }
		</Carousel>
	);
};

export default React.memo(ImageCarousel);
