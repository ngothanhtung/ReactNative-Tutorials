import * as ActionTypes from './types';

export const loginAsync = (email, password) => {
	return {
		type: ActionTypes.AUTH_LOGIN,
		email,
		password,
	};
};
