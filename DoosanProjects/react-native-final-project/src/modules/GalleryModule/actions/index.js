import * as ActionTypes from './types';

export const getPhotosAsync = () => {
	return {
		type: ActionTypes.GALLERY_GET_PHOTOS,
	};
};

export const getAlbumsAsync = () => {
	return {
		type: ActionTypes.GALLERY_GET_ALBUMS,
	};
};
