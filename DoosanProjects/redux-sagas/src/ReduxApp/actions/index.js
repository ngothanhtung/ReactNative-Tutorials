// action: { type: 'INCREASE_COUNT', number }
import * as ActionTypes from './types';

export const increaseCount = (number) => {
	return {
		type: ActionTypes.INCREASE_COUNT,
		number,
	};
};

export const decreaseCount = (number) => {
	return {
		type: ActionTypes.DECREASE_COUNT,
		number,
	};
};

export const login = (email, password) => {
	return {
		type: ActionTypes.DECREASE_COUNT,
		payload: { email, password },
	};
};

// ATM
export const withdraw = (money) => {
	return {
		type: ActionTypes.ATM_WITHDRAW,
		money: money,
	};
};

export const deposite = (money) => {
	return {
		type: ActionTypes.ATM_DEPOSIT,
		money: money,
	};
};

// get photos (Async)
export const getPhotosAsync = () => {
	return (dispatch) => {
		dispatch({ type: ActionTypes.GALLERY_GET_PHOTOS_PENDING });

		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: ActionTypes.GALLERY_GET_PHOTOS_SUCCESS, photos: json });
			})
			.catch((error) => {
				dispatch({ type: ActionTypes.GALLERY_GET_PHOTOS_ERROR, error: error });
			});
	};
};
