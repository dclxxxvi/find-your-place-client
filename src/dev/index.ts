import React from 'react';
import { useInitial } from './useInitial';

const ComponentPreviews = React.lazy(async () => await import('./previews'));

export {
	ComponentPreviews,
	useInitial,
};
