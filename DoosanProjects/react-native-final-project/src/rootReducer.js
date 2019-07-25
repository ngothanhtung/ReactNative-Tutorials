import { combineReducers } from 'redux';
import galleryReducer from './modules/GalleryModule/reducers/galleryReducer';

const rootReducer = combineReducers({
	galleryReducer,
});

export default rootReducer;
