import * as ActionTypes from './types';
import axios from 'axios';
// COUNTER
export const increaseCount = (number) => {
	return {
		type: ActionTypes.INCREASE_COUNT,
		number: number,
	};
};
// increaseCount(1) <=> {
//   type: ActionTypes.INCREASE_COUNT,
//   number: 1,
// }

export const decreaseCount = (number) => ({
	type: ActionTypes.DECREASE_COUNT,
	number: number,
});

export const withDraw = (money) => ({
	type: ActionTypes.ATM_WITH_DRAW,
	money: money,
});

export const deposit = (money) => ({
	type: ActionTypes.ATM_DEPOSITE,
	money: money,
});
// PHOTO

export const getPhotosAsync = () => {
	return (dispatch) => {
		// LOADING
		dispatch({ type: ActionTypes.GET_PHOTOS_PENDING });

		axios
			.get('https://jsonplaceholder.typicode.com/photos')
			.then((response) => {
				// SUCCESS
				dispatch({
					type: ActionTypes.GET_PHOTOS_SUCCESS,
					photos: response.data,
				});
			})
			.catch((error) => {
				// ERROR
				console.log(error);
				dispatch({
					type: ActionTypes.GET_PHOTOS_ERROR,
					error: error,
				});
			});
	};
};
