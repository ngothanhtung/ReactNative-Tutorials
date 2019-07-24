import { combineReducers } from 'redux';
import counterReducer from './ReduxApp/reducers/counterReducer';
import atmReducer from './ReduxApp/reducers/atmReducer';
import galleryReducer from './ReduxApp/reducers/galleryReducer';

const rootReducer = combineReducers({
	counterReducer,
	atmReducer,
	galleryReducer,
});

export default rootReducer;
