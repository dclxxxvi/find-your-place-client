import React from 'react';
import { Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';

const ComponentPreviews: React.FC = () => {
	return (
		<Previews palette={ <PaletteTree/> }>
		</Previews>
	);
};

export default ComponentPreviews;
