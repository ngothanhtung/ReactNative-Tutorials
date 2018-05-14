import * as ActionTypes from '../Actions/types';

const defaultState = {
	addedProducts: [],
	total: 0,
};

const shoppingCartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.ADD_TO_CART:
			let addedProducts = [...state.addedProducts, { product: action.product, quantity: action.quantity }];
			let total = addedProducts.reduce((total, item) => (total + item.product.price * item.quantity), 0);
			return {
				...state,
				addedProducts: addedProducts,
				total: total
			};
		default:
			return state;
	}
};

export default shoppingCartReducer;