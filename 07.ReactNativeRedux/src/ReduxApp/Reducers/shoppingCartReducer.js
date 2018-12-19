import * as ActionTypes from '../Actions/types';

const defaultState = {
	products: [],
	addedProducts: [],
	total: 0,
	shoppingCartVisible: false
};

updateTotal = (items) => {
	return items.reduce((total, item) => (total + ((item.product.price * item.quantity) * (100 - item.product.discount) / 100)), 0);
}

const shoppingCartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.GET_PRODUCTS:
			return {
				...state,
				products: action.products,
			}

		case ActionTypes.SHOW_SHOPPING_CART:
			return {
				...state,
				shoppingCartVisible: true,
			}

		case ActionTypes.HIDE_SHOPPING_CART:
			return {
				...state,
				shoppingCartVisible: false,
			}

		case ActionTypes.ADD_TO_CART:
			// FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1	
			var found = [...state.addedProducts].find(item => item.product.id === action.product.id);
			if (found) {
				found.quantity++;
				var total = updateTotal([...state.addedProducts]);
				return {
					...state,
					addedProducts: [...state.addedProducts],
					total: total
				}
			}

			// ELSE ADD NEW ITEM WITH QUANTITY = 1	
			var addedProducts = [...state.addedProducts, { product: action.product, quantity: action.quantity }];
			var total = updateTotal(addedProducts);
			return {
				...state,
				addedProducts: addedProducts,
				total: total
			};

		case ActionTypes.REMOVE_FROM_CART:
			var addedProducts = [...state.addedProducts].filter(e => e.product.id != action.productId);
			var total = updateTotal(addedProducts);
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