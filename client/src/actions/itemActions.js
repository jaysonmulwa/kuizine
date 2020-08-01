import axios from 'axios';
import { GET_ITEMS, GET_ITEMS_FAIL, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {

	dispatch(setItemsLoading());
	axios
	.get('/api/items')
	.then(res => dispatch({
		type: GET_ITEMS,
		payload: res.data
	}))
	.catch(err => {
		dispatch(returnErrors(err.response.data, err.response.status, 'GET_ITEMS_FAIL' ));
		dispatch({
			type: GET_ITEMS_FAIL
		});
	});
};




//addItem 

// DeleteItems
export const setItemsLoading = () => {

	return{

		type: ITEMS_LOADING

	};
};
