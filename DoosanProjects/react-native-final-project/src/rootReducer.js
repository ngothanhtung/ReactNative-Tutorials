import { combineReducers } from 'redux';
import galleryReducer from './modules/GalleryModule/reducers/galleryReducer';
import authReducer from './modules/AuthModule/reducers';

const rootReducer = combineReducers({
	galleryReducer,
	authReducer,
});

export default rootReducer;
