import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import atmReducer from './atmReducer';
import galleryReducer from './galleryReducer';

const rootReducer = combineReducers({
	counterReducer,
	atmReducer,
	galleryReducer,
});

export default rootReducer;
